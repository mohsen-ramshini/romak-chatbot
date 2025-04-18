'use client'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { SignInFlow } from '../types'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}

// Zod schema for validation
const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(5, "Password must be at least 5 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})

type FormData = z.infer<typeof schema>

const SignUpCard = ({ setState }: SignUpCardProps) => {
  const [showPassword, setShowPassword] = useState(false) // State for showing password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false) // State for showing confirm password

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "admin@example.com",
      password: "12345",
      confirmPassword: "12345"
    }
  })

  const onSubmit = (data: FormData) => {
    console.log("✅ Signup form submitted:", data)
    toast.success("Signup completed successfully!")
  }

  return (
    <Card className="w-full h-full p-8 shadow-2xl border border-white/10 bg-white/10 backdrop-blur-lg text-white rounded-2xl">
      <CardHeader className="px-0 pt-0 space-y-2">
        <CardTitle className="text-3xl font-bold tracking-wide text-white">
          Create an account
        </CardTitle>
        <CardDescription className="text-base text-gray-300">
          Use your email or a social account to get started
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6 px-0 pb-0">
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              {...register("email")}
              className="bg-black/30 text-white placeholder-gray-400 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Email"
              type="email"
            />
            {errors.email && (
              <p className="text-sm text-red-400 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="relative">
            <Input
              {...register("password")}
              className="bg-black/30 text-white placeholder-gray-400 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </span>
            {errors.password && (
              <p className="text-sm text-red-400 mt-1">{errors.password.message}</p>
            )}
          </div>

          <div className="relative">
            <Input
              {...register("confirmPassword")}
              className="bg-black/30 text-white placeholder-gray-400 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </span>
            {errors.confirmPassword && (
              <p className="text-sm text-red-400 mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-base font-medium"
            size="lg"
          >
            Continue
          </Button>
        </form>

        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-white/20" />
          <span className="text-sm text-gray-300">OR</span>
          <div className="h-px flex-1 bg-white/20" />
        </div>

        <div className="flex flex-col gap-y-3">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-3 bg-white/10 border-white/10 text-white hover:bg-white/20"
          >
            <FcGoogle className="size-5" />
            Continue with Google
          </Button>
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-3 bg-white/10 border-white/10 text-white hover:bg-white/20"
          >
            <FaGithub className="size-5" />
            Continue with GitHub
          </Button>
        </div>

        <p className="text-sm text-gray-300 text-center">
          Already have an account?
          <span
            onClick={() => setState('signIn')}
            className="text-blue-400 hover:underline ml-1 cursor-pointer"
          >
            Sign in
          </span>
        </p>
      </CardContent>
    </Card>
  )
}

export default SignUpCard
