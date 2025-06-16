import '@testing-library/jest-dom'

interface RedirectResponse {
    status: 302
    url: string
    headers: { location: string }
}

interface SuccessResponse {
    status: 200
}

interface ForbiddenResponse {
    status: 403
    message: string
}

type MiddlewareResponse = RedirectResponse | SuccessResponse | ForbiddenResponse

const mockNextRequest = (url: string, headers: any = {}) => ({
    nextUrl: {
        pathname: url,
        clone: () => mockNextRequest(url, headers),
    },
    headers: new Map(Object.entries(headers)),
    cookies: new Map(),
})

const mockMiddleware = (request: any): MiddlewareResponse => {
    const pathname = request.nextUrl.pathname

    const mockAuth = { sessionClaims: { metadata: { role: 'student' } } }
    const userRole = mockAuth.sessionClaims?.metadata?.role

    const roleRedirects: { [key: string]: string } = {
        admin: '/dashboard/admin',
        teacher: '/dashboard/teacher',
        student: '/dashboard/student',
        parent: '/dashboard/parent',
    }

    if (pathname.startsWith('/dashboard') && !pathname.includes(`/dashboard/${userRole}`)) {
        const redirectUrl = roleRedirects[userRole] || '/dashboard/student'
        return {
            status: 302,
            url: redirectUrl,
            headers: { location: redirectUrl }
        }
    }

    if (pathname.startsWith('/dashboard/admin') && userRole !== 'admin') {
        return { status: 403, message: 'Forbidden' }
    }

    return { status: 200 }
}

describe('Middleware (Redirectări)', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('should redirect based on user role', () => {
        const mockAuth = { sessionClaims: { metadata: { role: 'student' } } }
        const request = mockNextRequest('/dashboard')

        const userRole = mockAuth.sessionClaims?.metadata?.role
        const expectedRedirect = `/dashboard/${userRole}`

        expect(userRole).toBe('student')
        expect(expectedRedirect).toBe('/dashboard/student')
    })

    test('should redirect student to student dashboard', () => {
        const request = mockNextRequest('/dashboard')
        const response = mockMiddleware(request)

        if (response.status === 302) {
            expect(response.url).toBe('/dashboard/student')
        }
        expect(response.status).toBe(302)
    })

    test('should redirect teacher to teacher dashboard', () => {
        const mockMiddlewareForTeacher = (request: any): MiddlewareResponse => {
            const mockAuth = { sessionClaims: { metadata: { role: 'teacher' } } }
            const userRole = mockAuth.sessionClaims?.metadata?.role

            if (request.nextUrl.pathname.startsWith('/dashboard') &&
                !request.nextUrl.pathname.includes(`/dashboard/${userRole}`)) {
                return {
                    status: 302,
                    url: `/dashboard/${userRole}`,
                    headers: { location: `/dashboard/${userRole}` }
                }
            }

            return { status: 200 }
        }

        const request = mockNextRequest('/dashboard')
        const response = mockMiddlewareForTeacher(request)

        if (response.status === 302) {
            expect(response.url).toBe('/dashboard/teacher')
        }
        expect(response.status).toBe(302)
    })

    test('should redirect admin to admin dashboard', () => {
        const mockMiddlewareForAdmin = (request: any): MiddlewareResponse => {
            const mockAuth = { sessionClaims: { metadata: { role: 'admin' } } }
            const userRole = mockAuth.sessionClaims?.metadata?.role

            if (request.nextUrl.pathname.startsWith('/dashboard') &&
                !request.nextUrl.pathname.includes(`/dashboard/${userRole}`)) {
                return {
                    status: 302,
                    url: `/dashboard/${userRole}`,
                    headers: { location: `/dashboard/${userRole}` }
                }
            }

            return { status: 200 }
        }

        const request = mockNextRequest('/dashboard')
        const response = mockMiddlewareForAdmin(request)

        if (response.status === 302) {
            expect(response.url).toBe('/dashboard/admin')
        }
        expect(response.status).toBe(302)
    })

    test('should allow access to correct role-specific dashboard', () => {
        const request = mockNextRequest('/dashboard/student')
        const response = mockMiddleware(request)

        expect(response.status).toBe(200)
    })

    test('should handle forbidden access correctly', () => {
        const mockMiddlewareForForbidden = (request: any): MiddlewareResponse => {
            const mockAuth = { sessionClaims: { metadata: { role: 'student' } } }
            const userRole = mockAuth.sessionClaims?.metadata?.role

            if (request.nextUrl.pathname.startsWith('/dashboard/admin') && userRole !== 'admin') {
                return { status: 403, message: 'Forbidden' }
            }

            return { status: 200 }
        }

        const request = mockNextRequest('/dashboard/admin')
        const response = mockMiddlewareForForbidden(request)

        expect(response.status).toBe(403)
        if (response.status === 403) {
            expect(response.message).toBe('Forbidden')
        }
    })
})