exports.host = process.env.REACT_APP_SCHEME_AND_HOST || 'http://localhost'
exports.port = process.env.PORT || 5001
exports.origin = process.env.ORIGIN || `${exports.host}:${exports.port}`
