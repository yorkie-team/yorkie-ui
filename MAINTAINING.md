# Maintaining yorkie-ui

## Releasing a New Version

### 1. Update the version number.

- Update `version` in [package.json](https://github.com/yorkie-team/yorkie-ui/blob/main/package.json#L3).
- Run `pnpm run version` to synchronize the versions of sub-packages with the root version.
- Create [Pull Request](https://github.com/yorkie-team/yorkie-ui/commits/main/package.json) and merge it into main.

### 2. Publish a new release.

1. Click on `Releases` in GitHub, then click the `Draft a new release` button.

   Alternatively, you can directly access this link: https://github.com/yorkie-team/yorkie-ui/releases/new

   ![image](https://github.com/user-attachments/assets/03f5cf54-eafe-4577-84a4-e4d1d7f8c7bf)

2. Create a new tag.

   ![image](https://github.com/user-attachments/assets/ef34bd77-3d7b-4111-93a6-2408be0777d2)

3. Click the `Generate release notes` button.

   ![image](https://github.com/user-attachments/assets/78fc240c-385c-414e-a7a3-03b73a31254b)

4. Click the `Publish release` button.

### 3. Deploy

When you publish the release, [GitHub action](https://github.com/yorkie-team/yorkie-ui/blob/main/.github/workflows/npm-publish.yml) will automatically deploy Yorkie UI to [npm](https://www.npmjs.com/package/@yorkie-ui/core).
