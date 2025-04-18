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
import { useRouter } from 'next/navigation'

interface SignInCardProps {
  setState: (state: SignInFlow) => void;
}

// Zod schema for validation
const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
})

type SignInData = z.infer<typeof signInSchema>

const SignInCard = ({ setState }: SignInCardProps) => {
  const [showPassword, setShowPassword] = useState(false) 
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "admin@example.com",
      password: "12345"
    }
  })

  const onSubmit = (data: SignInData) => {
    if (data.email === 'admin@example.com' && data.password === '12345') {
      toast.success('Login successful! Redirecting to the homepage...')
      router.push('/home')
    } else {
      toast.error('Invalid email or password!')
  
    }
  }

  return (
    <Card className="w-full h-full p-8 shadow-2xl border border-white/10 bg-white/10 backdrop-blur-lg text-white rounded-2xl">
      <CardHeader className="px-0 pt-0 space-y-2">
        <CardTitle className="text-3xl font-bold tracking-wide text-white">
          Welcome Back
        </CardTitle>
        <CardDescription className="text-base text-gray-300">
          Login with your email or social account
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
          Don't have an account?
          <span
            onClick={() => setState('signUp')}
            className="text-blue-400 hover:underline ml-1 cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </CardContent>
    </Card>
  )
}

export default SignInCard



