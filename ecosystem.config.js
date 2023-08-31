module.exports = {
	apps: [{
	name: 'nodebird',
	script: './app.js',
	instances: 0,
	exec_mode: 'cluster'
	}]
}
