type GithubUser = {
  login: string;
  public_repos: number;
  followers: number;
};

async function getStatus(): Promise<{ ok: boolean; data: GithubUser | null }> {
  try {
    const res = await fetch("https://api.github.com/users/octocat", {
      cache: "no-store",
    });
    if (!res.ok) return { ok: false, data: null };
    const data = (await res.json()) as GithubUser;
    return { ok: true, data };
  } catch {
    return { ok: false, data: null };
  }
}

export default async function HealthPage() {
  const { ok, data } = await getStatus();

  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <h1 className="font-heading text-3xl mb-6">Health check</h1>
      <p className="readout text-[13px] mb-4">
        STATUS{" "}
        <span className={ok ? "text-signal" : "text-red-500"}>
          {ok ? "● OK — DATA FETCHED SUCCESSFULLY" : "● FETCH FAILED"}
        </span>
      </p>
      {data && (
        <pre className="readout text-xs bg-[#FAFAFA] border border-border rounded-xl p-4 overflow-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
