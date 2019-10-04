module.exports = {
	apps: [{
		error_file: "./logs/error.log",
		ignore_watch: ["logs", "node_modules"],
		log_date_format: "YYYY-MM-DD | HH:mm:ss | Z",
		name: "katlynn-sverko-dev",
		out_file: "./logs/output.log",
		script: "./server.js",
		watch: true
	},
	{
		error_file: "./logs/error.log",
		log_date_format: "YYYY-MM-DD | HH:mm:ss | Z",
		name: "katlynn-sverko",
		out_file: "./logs/output.log",
		script: "./server.js",
	}]
};
