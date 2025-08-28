export async function createProfileApi(profile: any) {
  // mock server delay
  await new Promise((res) => setTimeout(res, 300));
  // persist to localStorage as a mock server
  try {
    const existing = window.localStorage.getItem("mock_profiles");
    const arr = existing ? JSON.parse(existing) : [];
    arr.push(profile);
    window.localStorage.setItem("mock_profiles", JSON.stringify(arr));
    return { ok: true, data: profile };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}

export async function getProfilesApi() {
  await new Promise((res) => setTimeout(res, 150));
  const existing = window.localStorage.getItem("mock_profiles");
  return existing ? JSON.parse(existing) : [];
}