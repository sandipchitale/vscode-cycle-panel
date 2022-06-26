import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('vscode-cycle-panel.closePanel', () => {
		// vscode.window.showInformationMessage('Closing Panel');
		vscode.commands.executeCommand('workbench.action.closePanel');
	});
	context.subscriptions.push(disposable);

	disposable = vscode.commands.registerCommand('vscode-cycle-panel.restorePanelWasNotMaximized', async () => {
		// vscode.window.showInformationMessage('Restoring Panel (was not maximized)');
		await vscode.commands.executeCommand('workbench.action.togglePanel');
		vscode.commands.executeCommand('workbench.action.toggleMaximizedPanel');
	});
	context.subscriptions.push(disposable);

	disposable = vscode.commands.registerCommand('vscode-cycle-panel.maximizePanel', () => {
		// vscode.window.showInformationMessage('Maximizing Panel');
		vscode.commands.executeCommand('workbench.action.toggleMaximizedPanel');
	});
	context.subscriptions.push(disposable);
}

export function deactivate() {}
