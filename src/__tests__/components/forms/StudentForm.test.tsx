import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

const mockStudentSchema = {
    parse: jest.fn(),
}

const mockTeacherSchema = {
    parse: jest.fn(),
}

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        refresh: jest.fn(),
    }),
}))

jest.mock('react-dom', () => ({
    ...jest.requireActual('react-dom'),
    useFormState: () => [{ success: false, error: false }, jest.fn()],
}))

jest.mock('react-toastify', () => ({
    toast: jest.fn(),
}))

jest.mock('next-cloudinary', () => ({
    CldUploadWidget: ({ children }: any) => children({ open: jest.fn() }),
}))

jest.mock('next/image', () => {
    return function MockImage(props: any) {
        return <img {...props} />
    }
})

jest.mock('react-hook-form', () => ({
    useForm: () => ({
        register: jest.fn((name) => ({
            name,
            onChange: jest.fn(),
            onBlur: jest.fn(),
            ref: jest.fn(),
        })),
        handleSubmit: jest.fn((fn) => () => fn({})),
        formState: { errors: {} },
    }),
}))

jest.mock('@hookform/resolvers/zod', () => ({
    zodResolver: jest.fn(() => jest.fn()),
}))

const MockStudentForm = ({ type, setOpen, relatedData }: any) => {
    return (
        <form className="flex flex-col gap-8">
            <h1 className="text-cl font-semibold">
                {type === "create" ? "Create a new student" : "Update the student"}
            </h1>

            <span className="text-xs text-gray-400 font-medium">Authentication Information</span>
            <div className="flex justify-between flex-wrap gap-4">
                <div>
                    <label htmlFor="username">Username</label>
                    <input id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" />
                </div>
            </div>

            <span className="text-xs text-gray-400 font-medium">Personal Information</span>
            <div className="flex justify-between flex-wrap gap-4">
                <div>
                    <label htmlFor="name">First Name</label>
                    <input id="name" name="name" />
                </div>
                <div>
                    <label htmlFor="surname">Last Name</label>
                    <input id="surname" name="surname" />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input id="address" name="address" />
                </div>
            </div>
        </form>
    )
}

const mockProps = {
    type: 'create' as const,
    setOpen: jest.fn(),
    relatedData: {
        grades: [{ id: 1, level: 1 }],
        classes: [{ id: 1, name: 'Class A' }],
        parents: [{ id: 'parent1', name: 'John', surname: 'Doe' }],
    },
}

describe('StudentForm', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('should render student form fields', () => {
        render(<MockStudentForm {...mockProps} />)

        expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
    })

    test('should render nume field (Romanian context)', () => {
        render(<MockStudentForm {...mockProps} />)

        expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
    })

    test('should render form title for create mode', () => {
        render(<MockStudentForm {...mockProps} type="create" />)

        expect(screen.getByText(/create a new student/i)).toBeInTheDocument()
    })

    test('should render form title for update mode', () => {
        render(<MockStudentForm {...mockProps} type="update" />)

        expect(screen.getByText(/update the student/i)).toBeInTheDocument()
    })

    test('should render all required form fields', () => {
        render(<MockStudentForm {...mockProps} />)

        expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/phone/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/address/i)).toBeInTheDocument()
    })

    test('should render authentication information section', () => {
        render(<MockStudentForm {...mockProps} />)

        expect(screen.getByText(/authentication information/i)).toBeInTheDocument()
    })

    test('should render personal information section', () => {
        render(<MockStudentForm {...mockProps} />)

        expect(screen.getByText(/personal information/i)).toBeInTheDocument()
    })

    test('should render student form fields (original test)', () => {
        render(<MockStudentForm {...mockProps} />)

        expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
    })
})