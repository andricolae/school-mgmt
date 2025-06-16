import '@testing-library/jest-dom'

const createMockRequest = ({ role, endpoint, method = 'GET' }: {
    role: string;
    endpoint: string;
    method?: string
}) => ({
    url: endpoint,
    method,
    headers: {
        authorization: `Bearer mock-token-${role}`,
    },
    user: {
        role,
    },
    nextUrl: {
        pathname: endpoint,
    },
})

const mockSecurityMiddleware = (request: any) => {
    const userRole = request.user?.role
    const endpoint = request.nextUrl?.pathname || request.url

    const adminOnlyEndpoints = ['/admin', '/dashboard/admin']
    const teacherEndpoints = ['/dashboard/teacher']
    const studentEndpoints = ['/dashboard/student']
    const parentEndpoints = ['/dashboard/parent']

    if (adminOnlyEndpoints.some(path => endpoint.startsWith(path))) {
        if (userRole !== 'admin') {
            return { status: 403, message: 'Forbidden: Admin access required' }
        }
    }

    if (teacherEndpoints.some(path => endpoint.startsWith(path))) {
        if (userRole !== 'teacher' && userRole !== 'admin') {
            return { status: 403, message: 'Forbidden: Teacher access required' }
        }
    }

    if (studentEndpoints.some(path => endpoint.startsWith(path))) {
        if (!['student', 'teacher', 'admin'].includes(userRole)) {
            return { status: 403, message: 'Forbidden: Student access required' }
        }
    }

    if (parentEndpoints.some(path => endpoint.startsWith(path))) {
        if (!['parent', 'admin'].includes(userRole)) {
            return { status: 403, message: 'Forbidden: Parent access required' }
        }
    }

    return { status: 200, message: 'Access granted' }
}

describe('Security Tests', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('should prevent unauthorized access', () => {
        const unauthorizedRequest = createMockRequest({
            role: 'student',
            endpoint: '/admin'
        })

        const response = mockSecurityMiddleware(unauthorizedRequest)

        expect(response.status).toBe(403)
        expect(response.message).toContain('Forbidden')
    })

    test('should prevent student access to admin dashboard', () => {
        const unauthorizedRequest = createMockRequest({
            role: 'student',
            endpoint: '/dashboard/admin'
        })

        const response = mockSecurityMiddleware(unauthorizedRequest)

        expect(response.status).toBe(403)
        expect(response.message).toBe('Forbidden: Admin access required')
    })

    test('should prevent teacher access to admin endpoints', () => {
        const unauthorizedRequest = createMockRequest({
            role: 'teacher',
            endpoint: '/admin'
        })

        const response = mockSecurityMiddleware(unauthorizedRequest)

        expect(response.status).toBe(403)
    })

    test('should allow admin access to all endpoints', () => {
        const adminRequest = createMockRequest({
            role: 'admin',
            endpoint: '/admin'
        })

        const response = mockSecurityMiddleware(adminRequest)

        expect(response.status).toBe(200)
        expect(response.message).toBe('Access granted')
    })

    test('should allow teacher access to teacher dashboard', () => {
        const teacherRequest = createMockRequest({
            role: 'teacher',
            endpoint: '/dashboard/teacher'
        })

        const response = mockSecurityMiddleware(teacherRequest)

        expect(response.status).toBe(200)
    })

    test('should allow student access to student dashboard', () => {
        const studentRequest = createMockRequest({
            role: 'student',
            endpoint: '/dashboard/student'
        })

        const response = mockSecurityMiddleware(studentRequest)

        expect(response.status).toBe(200)
    })

    test('should prevent parent access to teacher dashboard', () => {
        const parentRequest = createMockRequest({
            role: 'parent',
            endpoint: '/dashboard/teacher'
        })

        const response = mockSecurityMiddleware(parentRequest)

        expect(response.status).toBe(403)
    })

    test('should handle missing user role', () => {
        const invalidRequest = createMockRequest({
            role: '',
            endpoint: '/dashboard/admin'
        })

        const response = mockSecurityMiddleware(invalidRequest)

        expect(response.status).toBe(403)
    })
})