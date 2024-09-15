/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
    remotePatterns:[
        {
            hostname:"img.clerk.com",
            protocol:'http',
            port:""
        }
    ]
}
}

export default nextConfig;
