// #region -Dependencies

// MARK: Pulumi
import * as github from "@pulumi/github";

// #endregion

// #region -Contributors’

// MARK: .

// #endregion

// MARK: -Repository
const repository = new github.Repository("VladimirCreator", {
	name: "pulumi",
	allowRebaseMerge: false,
	defaultBranch: "master",
	hasDownloads: true,
	hasIssues: true,
	pages: {
		buildType: "workflow",
		source: {
			branch: "master"
		}
	},
	securityAndAnalysis: {
		secretScanning: {
			status: "enabled"
		},
		secretScanningPushProtection: {
			status: "enabled"
		}
	},
	visibility: "public"
}, {
	protect: true
})

// #region -Issues

/** Example of an issue.
 *
 * @see {@link https://pulumi.com/registry/packages/github/api-docs/issue#inputs|Available parameters} for all available parameters.
 *
 * @example
 * ```ts
 * const issue = new github.Issue("title", {
 * 	repository: repository.name,
 * 	title: "Title",
 * 	body: "Description."
 * })
 * ```
 */

// MARK: .

// #endregion

export const clusterName = repository.name
