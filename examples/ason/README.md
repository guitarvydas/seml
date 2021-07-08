# identifiers
	NIY:
		after negativenumbers:
		subsume "-" delimeters into idents
			N D- N --> N .newText
			where newtext=$1.text+$2.text+$3.text
		might need to do this again, for ".", but after "words" pass
		xyz - abc -> xyz-abc
		xyz . abc -> field ref
