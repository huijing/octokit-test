import { Octokit } from "octokit";
import { writeFileSync } from "fs";

const octokit = new Octokit();

async function test() {
  const { data } = await octokit.request(
    "GET /repos/wicg/webmonetization/collaborators",
    {
      owner: "wicg",
      repo: "webmonetization",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  const contributors = JSON.stringify(data);
  writeFileSync(
    "../../static/contributor-data/contributors.json",
    contributors
  );
}

test();
