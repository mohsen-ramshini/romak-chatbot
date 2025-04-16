import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { SignInFlow } from '../types'

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}

const SignUpCard = ({ setState }: SignUpCardProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
    <form className="space-y-5">
      <Input
        className="bg-black/30 text-white placeholder-gray-400 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
        required
      />
      <Input
        className="bg-black/30 text-white placeholder-gray-400 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        required
      />
      <Input
        className="bg-black/30 text-white placeholder-gray-400 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        type="password"
        required
      />
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
