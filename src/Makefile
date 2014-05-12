all: erlang-formats.xpi

erlang-formats.xpi: chrome chrome.manifest install.rdf
	zip -r erlang-formatters chrome chrome.manifest install.rdf
	mv  erlang-formatters.zip erlang-formatters.xpi
