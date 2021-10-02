const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
module.exports = {
	publicPath: "/blog/",
	chainWebpack: config => {
	config.plugin('monaco-editor').use(new MonacoWebpackPlugin, [
		{
		  // Languages are loaded on demand at runtime
		  languages: ['json', 'javascript', 'html', 'xml','css']
		}
	  ])
	}
}
