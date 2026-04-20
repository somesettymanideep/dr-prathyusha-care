export type SubmissionType = "consultation" | "contact";

export interface Submission {
  id: string;
  type: SubmissionType;
  createdAt: string;
  data: Record<string, string>;
}

const STORAGE_KEY = "dpj_submissions";

export const getSubmissions = (): Submission[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const addSubmission = (type: SubmissionType, data: Record<string, string>) => {
  const submissions = getSubmissions();
  const entry: Submission = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    type,
    createdAt: new Date().toISOString(),
    data,
  };
  submissions.unshift(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
  return entry;
};

export const exportSubmissionsToCSV = (submissions: Submission[]) => {
  const headers = ["ID", "Type", "Date", "Name", "Email", "Phone", "Treatment", "Date/Time", "Message"];
  const rows = submissions.map((s) => {
    const d = s.data;
    const name = d.name || `${d.firstName || ""} ${d.lastName || ""}`.trim();
    return [
      s.id,
      s.type,
      new Date(s.createdAt).toLocaleString(),
      name,
      d.email || "",
      d.phone || "",
      d.treatment || "",
      d.date || "",
      d.message || "",
    ];
  });
  const escape = (v: string) => `"${String(v).replace(/"/g, '""')}"`;
  const csv = [headers, ...rows].map((r) => r.map(escape).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `submissions-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const AUTH_KEY = "dpj_admin_auth";

export const ADMIN_USERNAME = "admin";
export const ADMIN_PASSWORD = "123456";

export const isAdminAuthed = () => sessionStorage.getItem(AUTH_KEY) === "1";
export const setAdminAuthed = (v: boolean) => {
  if (v) sessionStorage.setItem(AUTH_KEY, "1");
  else sessionStorage.removeItem(AUTH_KEY);
};
