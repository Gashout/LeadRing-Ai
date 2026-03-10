import React from 'react';
import { 
  Phone, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  XCircle,
  Play,
  ArrowRight,
  Menu,
  ChevronDown,
  Building2,
  Stethoscope,
  Car,
  Dumbbell,
  Landmark,
  GraduationCap,
  Plane,
  HardHat
} from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/601121717319?text=Hi,%20I%20want%20to%20book%20a%20free%20demo%20for%20LeadRing";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050d1a] text-white selection:bg-blue-500/30">
      {/* 1. NAVBAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#050d1a]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                <Phone className="w-6 h-6 text-blue-500" />
                LeadRing
              </span>
              <span className="text-[10px] text-blue-400 font-medium uppercase tracking-widest leading-none mt-1">
                AI That Follows Up Your Leads in Seconds
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">How It Works</a>
              <a href="#industries" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Industries</a>
              <a href="#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#faq" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">FAQ</a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2 !px-6 !text-sm">
                Book a Free Demo
              </a>
            </div>
            
            <button className="md:hidden text-gray-300">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* 2. HERO SECTION */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-8 animate-fade-in-up">
              <Zap className="w-3 h-3" /> AI-Powered Real-Time Response
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 animate-fade-in-up delay-100">
              Your Leads Are Going Cold. <br />
              <span className="text-blue-500">Our AI Calls Them in Seconds.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 animate-fade-in-up delay-200">
              LeadRing automatically calls every lead the moment they fill your form — 24/7, no staff needed, works with any website.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
                Book a Free Demo
              </a>
              <a href="#video" className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2">
                <Play className="w-4 h-4 fill-current" /> Watch How It Works
              </a>
            </div>

            {/* Simple animation/graphic placeholder */}
            <div className="mt-20 max-w-4xl mx-auto relative animate-fade-in-up delay-300">
              <div className="glass-card rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                    <MessageSquare className="w-8 h-8 text-blue-400" />
                  </div>
                  <span className="text-sm font-medium text-gray-300">Form Filled</span>
                </div>
                <div className="hidden md:block flex-1 h-[2px] bg-gradient-to-r from-blue-500/50 to-indigo-500/50 relative">
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full blur-[4px] animate-[ping_2s_infinite]" />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.6)] border-4 border-white/10 animate-[pulse_2s_infinite]">
                    <Phone className="w-10 h-10 text-white" />
                  </div>
                  <span className="text-sm font-bold text-white">Phone Rings</span>
                </div>
                <div className="hidden md:block flex-1 h-[2px] bg-gradient-to-r from-indigo-500/50 to-emerald-500/50" />
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                    <BarChart3 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <span className="text-sm font-medium text-gray-300">Report Sent</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PROBLEM SECTION */}
        <section className="py-24 bg-[#070f1d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Every Hour You Wait, You Lose the Customer
            </h2>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="glass-card rounded-2xl p-8 border-red-500/20">
                <h3 className="text-2xl font-bold text-red-400 mb-8 flex items-center gap-3">
                  <XCircle className="w-6 h-6" /> Without LeadRing
                </h3>
                <ul className="space-y-6">
                  {[
                    "Lead fills form at 9pm, no one calls until morning",
                    "Salesperson calls back but lead forgot who you are",
                    "No record of what the customer said",
                    "Your team can only handle a few leads per day",
                    "Business closes at night, leads go cold"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-gray-400">
                      <span className="text-red-500/50">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card rounded-2xl p-8 border-emerald-500/20 bg-emerald-500/[0.02]">
                <h3 className="text-2xl font-bold text-emerald-400 mb-8 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6" /> With LeadRing
                </h3>
                <ul className="space-y-6">
                  {[
                    "AI calls the lead within seconds, day or night",
                    "Called while they are still excited and ready to buy",
                    "Full report sent to you after every single call",
                    "AI handles unlimited leads simultaneously",
                    "AI works 24/7 and never misses a lead"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. VIDEO SECTION */}
        <section id="video" className="py-24 bg-[#050d1a]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">See LeadRing in Action</h2>
            <p className="text-lg text-gray-400 mb-12">
              Watch how a lead goes from form submission to phone call in under 10 seconds
            </p>
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gray-900 border border-white/10 shadow-2xl flex items-center justify-center group cursor-pointer relative">
              <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/20 transition-all duration-500" />
              <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Play className="w-8 h-8 text-white fill-current" />
              </div>
              <p className="absolute bottom-8 text-sm text-gray-500 font-medium">Demo Video Placeholder</p>
            </div>
            <div className="mt-12">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book a Free Demo
              </a>
            </div>
          </div>
        </section>

        {/* 5. HOW IT WORKS SECTION */}
        <section id="how-it-works" className="py-24 bg-[#070f1d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Set Up in 10 Minutes. Works Instantly.
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Connect Your Email",
                  desc: "We connect your business email to LeadRing in 10 minutes. No website changes needed.",
                  icon: <MessageSquare className="w-8 h-8 text-blue-500" />
                },
                {
                  step: "02",
                  title: "AI Calls Your Leads",
                  desc: "The moment a lead fills your form, our AI calls them automatically and has a natural conversation.",
                  icon: <Phone className="w-8 h-8 text-blue-500" />
                },
                {
                  step: "03",
                  title: "Receive a Full Report",
                  desc: "After every call you get a full report: who called, what they want, how serious they are.",
                  icon: <BarChart3 className="w-8 h-8 text-blue-500" />
                }
              ].map((item, i) => (
                <div key={i} className="relative p-8 rounded-2xl glass-card text-center group hover:bg-white/[0.03] transition-colors">
                  <div className="text-6xl font-black text-white/5 absolute -top-4 left-4 group-hover:text-blue-500/10 transition-colors">
                    {item.step}
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6 border border-blue-500/20">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. INDUSTRIES SECTION */}
        <section id="industries" className="py-24 bg-[#050d1a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Works For Any Business That Receives Leads Online
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Real Estate", icon: <Building2 className="w-6 h-6" /> },
                { name: "Private Clinics", icon: <Stethoscope className="w-6 h-6" /> },
                { name: "Car Dealerships", icon: <Car className="w-6 h-6" /> },
                { name: "Gyms & Fitness", icon: <Dumbbell className="w-6 h-6" /> },
                { name: "Banks & Loans", icon: <Landmark className="w-6 h-6" /> },
                { name: "Schools & Uni", icon: <GraduationCap className="w-6 h-6" /> },
                { name: "Travel Agencies", icon: <Plane className="w-6 h-6" /> },
                { name: "Construction", icon: <HardHat className="w-6 h-6" /> }
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl flex flex-col items-center gap-4 hover:border-blue-500/50 transition-colors cursor-default group">
                  <div className="text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-sm md:text-base text-center">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. SOCIAL PROOF SECTION */}
        <section className="py-24 bg-[#070f1d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-16">Real Results From Real Businesses</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "We used to call leads 3-4 hours after they submitted. Now they get called in seconds. Our conversion rate went up 35%.",
                  author: "Real Estate Agency, Dubai"
                },
                {
                  quote: "We were missing leads every night after the clinic closed. LeadRing now handles everything 24/7. Game changer.",
                  author: "Private Clinic, Abu Dhabi"
                },
                {
                  quote: "Setup took 10 minutes. The AI sounds natural and our customers don't even realize it's AI.",
                  author: "Car Dealership, Sharjah"
                }
              ].map((item, i) => (
                <div key={i} className="glass-card p-8 rounded-2xl text-left flex flex-col justify-between">
                  <div className="mb-6">
                    <div className="flex gap-1 text-blue-500 mb-4">
                      {[...Array(5)].map((_, i) => <Zap key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-gray-300 italic leading-relaxed">"{item.quote}"</p>
                  </div>
                  <div className="pt-6 border-t border-white/10 font-bold text-sm text-blue-400">
                    — {item.author}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. PRICING SECTION */}
        <section id="pricing" className="py-24 bg-[#050d1a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Simple Pricing. No Surprises.</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* STARTER */}
              <div className="glass-card p-8 rounded-3xl border border-white/5 flex flex-col">
                <h3 className="text-xl font-bold mb-2">STARTER</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$97</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-4 mb-10 flex-1 text-sm text-gray-400">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Up to 100 AI calls per month</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Works with any website form</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Full report after every call</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> WhatsApp & Email delivery</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Setup in 10 minutes</li>
                </ul>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary text-center text-sm w-full">
                  Get Started
                </a>
              </div>

              {/* GROWTH */}
              <div className="glass-card p-8 rounded-3xl border-2 border-blue-600 relative flex flex-col scale-105 shadow-[0_0_40px_rgba(37,99,235,0.2)]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold mb-2">GROWTH</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$197</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-4 mb-10 flex-1 text-sm text-gray-200">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Up to 500 AI calls per month</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Everything in Starter</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Multi-language (Arabic & English)</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Priority support</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Custom AI script</li>
                </ul>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-center text-sm w-full">
                  Get Started
                </a>
              </div>

              {/* ENTERPRISE */}
              <div className="glass-card p-8 rounded-3xl border border-white/5 flex flex-col">
                <h3 className="text-xl font-bold mb-2">ENTERPRISE</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
                <ul className="space-y-4 mb-10 flex-1 text-sm text-gray-400">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Unlimited AI calls</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Everything in Growth</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Dedicated account manager</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Custom integrations</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Advanced analytics</li>
                </ul>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary text-center text-sm w-full">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 9. FAQ SECTION */}
        <section id="faq" className="py-24 bg-[#070f1d]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Questions? We Have Answers.</h2>
            <div className="space-y-4">
              {[
                { q: "Does the AI sound like a robot?", a: "No. LeadRing sounds natural and conversational. Most leads don't realize they're talking to an AI." },
                { q: "Do I need to change my website?", a: "No. LeadRing works with your existing website and form. We only connect to your email." },
                { q: "How long does setup take?", a: "10 minutes. We handle the entire setup for you." },
                { q: "What if the lead doesn't answer?", a: "LeadRing automatically tries again after a few minutes." },
                { q: "What languages does it support?", a: "Currently Arabic and English. More languages coming soon." },
                { q: "How do I receive the call reports?", a: "Reports are sent directly to your WhatsApp or email after every call." },
                { q: "Is there a contract?", a: "No. Cancel anytime with no fees." }
              ].map((item, i) => (
                <details key={i} className="group glass-card rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer focus:outline-none">
                    <h3 className="font-bold pr-4">{item.q}</h3>
                    <ChevronDown className="w-5 h-5 text-gray-500 group-open:-rotate-180 transition-transform duration-300" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 10. FINAL CTA SECTION */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-800 rounded-3xl p-12 text-center shadow-[0_0_80px_rgba(37,99,235,0.3)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -mr-32 -mt-32" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-bold text-white mb-6">
                Stop Losing Leads. <br />
                Start Closing More Deals.
              </h2>
              <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
                Join businesses across the UAE that never miss a lead again. 
                Experience the future of lead follow-up.
              </p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-blue-600 hover:bg-blue-50 font-bold py-5 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl">
                Book Your Free Demo on WhatsApp <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 11. FOOTER */}
      <footer className="bg-[#050d1a] border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 mb-2">
                <Phone className="w-6 h-6 text-blue-500" />
                LeadRing
              </span>
              <p className="text-sm text-gray-500 max-w-xs">
                AI That Follows Up Your Leads in Seconds. The fastest way to talk to your customers.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 flex-1 md:justify-items-end">
              <a href="#how-it-works" className="text-sm text-gray-500 hover:text-white transition-colors">How It Works</a>
              <a href="#industries" className="text-sm text-gray-500 hover:text-white transition-colors">Industries</a>
              <a href="#pricing" className="text-sm text-gray-500 hover:text-white transition-colors">Pricing</a>
              <a href="#faq" className="text-sm text-gray-500 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              © 2025 LeadRing. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
              WhatsApp: <a href="tel:+601121717319" className="text-white hover:text-blue-400 transition-colors">+601121717319</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
