var respecConfig = {
	// embed RDFa data in the output
	trace:  true,
	useExperimentalStyles: true,
	doRDFa: '1.1',
	includePermalinks: true,
	permalinkEdge:     true,
	permalinkHide:     false,
	tocIntroductory: true,
	// specification status (e.g., WD, LC, NOTE, etc.). If in doubt use ED.
	specStatus:           "ED",
	//crEnd:                "2012-04-30",
	//perEnd:               "2013-07-23",
	//publishDate:          "2013-08-22",
	diffTool:             "http://www.aptest.com/standards/htmldiff/htmldiff.pl",
	
	// the specifications short name, as in https://www.w3.org/TR/short-name/
	shortName:            "WCAG21",
	
	
	// if you wish the publication date to be other than today, set this
	//publishDate:  "2014-12-11",
	copyrightStart:  "2017",
	
	// if there is a previously published draft, uncomment this and set its YYYY-MM-DD date
	// and its maturity status
	//previousPublishDate:  "2014-06-12",
	//previousMaturity:  "WD",
	prevRecURI: "https://www.w3.org/TR/2008/REC-WCAG20-20081211/",
	//previousDiffURI: "https://www.w3.org/TR/2014/REC-wai-aria-20140320/",
	
	// if there a publicly available Editors Draft, this is the link
	edDraftURI: "https://w3c.github.io/wcag21/guidelines/",
	
	// if this is a LCWD, uncomment and set the end of its review period
	// lcEnd: "2012-02-21",
	
	// editors, add as many as you like
	// only "name" is required
	editors: [
		{
			name: "Andrew Kirkpatrick",
			url: "http://www.adobe.com/",
			mailto: "akirkpat@adobe.com",
			company: "Adobe",
			companyURI: "http://www.adobe.com/",
			w3cid: 39770
		},
		{
			name: "Joshue O Connor",
			url: "http://interaccess.ie/",
			mailto: "josh@interaccess.ie",
			company: "Invited Expert, InterAccess",
			companyURI: "http://interaccess.ie/",
			w3cid: 41218
		},
		{
			name: "Michael Cooper",
			url: 'https://www.w3.org',
			mailto: "cooper@w3.org",
			company: "W3C",
			companyURI: "https://www.w3.org",
			w3cid: 34017
		}
	],
	
	// authors, add as many as you like.
	// This is optional, uncomment if you have authors as well as editors.
	// only "name" is required. Same format as editors.
	
	//authors:  [
	//    { name: "Your Name", url: "http://example.org/",
	//      company: "Your Company", companyURI: "http://example.com/" },
	//],
	
	/*
	alternateFormats: [
		{ uri: 'wcag21-diff.html', label: "Diff from Previous Recommendation" } ,
		{ uri: 'wcag21.ps', label: "PostScript version" },
		{ uri: 'wcag21.pdf', label: "PDF version" }
	],
	*/
	
	// errata: 'https://www.w3.org/2010/02/rdfa/errata.html',
	
	// name of the WG
	wg:           "Accessibility Guidelines Working Group",
	
	// URI of the public WG page
	wgURI:        "https://www.w3.org/WAI/GL/",
	
	// name (with the @w3c.org) of the public mailing to which comments are due
	wgPublicList: "public-comments-wcag20",
	
	// URI of the patent status for this WG, for Rec-track documents
	// !!!! IMPORTANT !!!!
	// This is important for Rec-track documents, do not copy a patent URI from a random
	// document unless you know what you're doing. If in doubt ask your friendly neighbourhood
	// Team Contact.
	wgPatentURI:  "https://www.w3.org/2004/01/pp-impl/35422/status",
	maxTocLevel: 4,
	
	localBiblio: biblio,
	
	postProcess: [addTextSemantics]
	
};
