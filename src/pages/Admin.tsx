import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Lock, LogOut, Download, Inbox } from "lucide-react";
import {
  ADMIN_PASSWORD,
  ADMIN_USERNAME,
  Submission,
  exportSubmissionsToCSV,
  getSubmissions,
  isAdminAuthed,
  setAdminAuthed,
} from "@/lib/submissions";

const Admin = () => {
  const navigate = useNavigate();
  const [authed, setAuthed] = useState(isAdminAuthed());
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    document.title = "Admin Panel | Dr. Prathyusha Javvadi";
    if (authed) setSubmissions(getSubmissions());
  }, [authed]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setAdminAuthed(true);
      setAuthed(true);
      toast.success("Welcome back, Admin");
    } else {
      toast.error("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setAdminAuthed(false);
    setAuthed(false);
    setUsername("");
    setPassword("");
  };

  const consultations = useMemo(() => submissions.filter((s) => s.type === "consultation"), [submissions]);
  const contacts = useMemo(() => submissions.filter((s) => s.type === "contact"), [submissions]);

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/40 px-4">
        <Card className="w-full max-w-md p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-2xl font-display font-bold">Admin Login</h1>
            <p className="text-sm text-muted-foreground">Enter your credentials to access the dashboard</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Username</label>
              <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="admin" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••" required />
            </div>
            <Button type="submit" className="w-full" variant="hero">Sign In</Button>
            <Button type="button" variant="ghost" className="w-full" onClick={() => navigate("/")}>Back to site</Button>
          </form>
        </Card>
      </div>
    );
  }

  const renderTable = (rows: Submission[]) => {
    if (rows.length === 0) {
      return (
        <div className="text-center py-16 text-muted-foreground">
          <Inbox className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>No submissions yet.</p>
        </div>
      );
    }
    return (
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr className="text-left">
              <th className="p-3 font-semibold">Date</th>
              <th className="p-3 font-semibold">Name</th>
              <th className="p-3 font-semibold">Email</th>
              <th className="p-3 font-semibold">Phone</th>
              <th className="p-3 font-semibold">Details</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((s) => {
              const d = s.data;
              const name = d.name || `${d.firstName || ""} ${d.lastName || ""}`.trim() || "—";
              return (
                <tr key={s.id} className="border-t border-border hover:bg-muted/30">
                  <td className="p-3 whitespace-nowrap text-muted-foreground">{new Date(s.createdAt).toLocaleString()}</td>
                  <td className="p-3 font-medium">{name}</td>
                  <td className="p-3">{d.email || "—"}</td>
                  <td className="p-3">{d.phone || "—"}</td>
                  <td className="p-3 max-w-md">
                    {s.type === "consultation" ? (
                      <div className="space-y-1">
                        {d.treatment && <Badge variant="secondary">{d.treatment}</Badge>}
                        {d.date && <div className="text-xs text-muted-foreground">Preferred: {new Date(d.date).toLocaleString()}</div>}
                      </div>
                    ) : (
                      <p className="text-muted-foreground line-clamp-2">{d.message || "—"}</p>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-display font-bold">Admin Dashboard</h1>
            <p className="text-xs text-muted-foreground">Form submissions overview</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => exportSubmissionsToCSV(submissions)} disabled={submissions.length === 0}>
              <Download className="w-4 h-4" /> Export CSV
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4" /> Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-6">
        <div className="grid sm:grid-cols-3 gap-4">
          <Card className="p-5">
            <p className="text-sm text-muted-foreground">Total submissions</p>
            <p className="text-3xl font-bold text-primary mt-1">{submissions.length}</p>
          </Card>
          <Card className="p-5">
            <p className="text-sm text-muted-foreground">Consultations</p>
            <p className="text-3xl font-bold text-secondary mt-1">{consultations.length}</p>
          </Card>
          <Card className="p-5">
            <p className="text-sm text-muted-foreground">Contact messages</p>
            <p className="text-3xl font-bold text-secondary mt-1">{contacts.length}</p>
          </Card>
        </div>

        <Card className="p-2 sm:p-4">
          <Tabs defaultValue="consultation">
            <TabsList>
              <TabsTrigger value="consultation">Consultations ({consultations.length})</TabsTrigger>
              <TabsTrigger value="contact">Contact ({contacts.length})</TabsTrigger>
            </TabsList>
            <TabsContent value="consultation" className="mt-4">{renderTable(consultations)}</TabsContent>
            <TabsContent value="contact" className="mt-4">{renderTable(contacts)}</TabsContent>
          </Tabs>
        </Card>
      </main>
    </div>
  );
};

export default Admin;
