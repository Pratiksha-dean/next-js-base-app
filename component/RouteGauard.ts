import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getToken } from './Constant';

export { RouteGuard };

function RouteGuard({ children }: any) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);
    console.log("🚀 ~ file: RouteGauard.ts:10 ~ RouteGuard ~ authorized:", authorized)

    useEffect(() => {
        // on initial load - run auth check
        authCheck(router.asPath);

        // on route change start - hide page content by setting authorized to false
        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);

        // on route change complete - run auth check
        router.events.on('routeChangeComplete', authCheck)

        // unsubscribe from events in useEffect return function
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function authCheck(url: any) {
        // redirect to login page if accessing a private page and not logged in
        const token = getToken();
        console.log("🚀 ~ file: RouteGauard.ts:34 ~ authCheck ~ token:", token, !token)
        const publicPaths = ['/login', '/sign-up', '/admin/login', '/forgot-password'];
        const path = url.split('?')[0];
        if (!token && !publicPaths.includes(path)) {
            setAuthorized(false);
            router.push({
                pathname: '/login',
            });
        } else {
            setAuthorized(true);
        }
    }

    return (authorized && children);
}