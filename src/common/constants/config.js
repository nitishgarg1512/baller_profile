const domain = 'ballerprofile.herokuapp.com';
const protocol = 'http://';
const port = undefined;

const serverUrl = `${protocol}${domain}${port ? `:${port}` : ''}`;

export { domain };
export { port };
export { protocol };
export { serverUrl };
