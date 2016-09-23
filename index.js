'use strict';

const pkg = require('package-json');

module.exports = name => pkg(name).then(info => {
	const time = info.time;
	const mod = time.modified;

	delete time.modified;
	delete time.created;

	for (let version in time) {
		if (time[version] === mod) {
			return version;
		}
	}
});

