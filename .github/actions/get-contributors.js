const { Octokit } = require("@octokit/action");
const fs = require("fs");

const octokit = new Octokit();

async function test() {
  const { data } = await octokit.request(
    "GET /repos/huijing/tools/collaborators",
    {
      owner: "huijing",
      repo: "tools",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  const contributors = JSON.stringify(data);
  fs.writeFileSync(
    "../../static/contributor-data/contributors.json",
    contributors
  );
}

test();
