const Icons = {
    Lightning: () => (
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    ),
    Copy: () => (
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>
    ),
    Check: () => (
        <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
    ),
    Discord: () => (
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
        </svg>
    ),
    ExternalLink: () => (
        <svg className="w-5 h-5 ml-2 inline animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
    ),
    Map: () => (
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
    ),
    Server: () => (
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
    ),
    ShieldAlert: () => (
        <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
    ),
    Users: () => (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    ),
    Crown: () => (
        <svg className="w-5 h-5 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
    )
};

function App() {
    const serverId = "39073659"; 
    const serverIp = "107.155.95.122:30041";
    const discordLink = "https://discord.gg/uCCTy8AWWc";
    const battlemetricsLink = `https://www.battlemetrics.com/servers/rust/${serverId}`;

    const [copied, setCopied] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [apiStatus, setApiStatus] = React.useState('loading');

    const [serverData, setServerData] = React.useState({
        name: "[SEA/PH] Chill Beginners 2x",
        playersOnline: 0,
        maxPlayers: 100,
        queue: 0,
        fps: 260,
        uptime: "Active (Stable)",
        lastWipe: "Recent Friday",
        worldSize: 3500,
        rank: 1,
        mapName: "Procedural Map"
    });

    const [shopCart, setShopCart] = React.useState(null);
    const [isCheckoutOpen, setIsCheckoutOpen] = React.useState(false);
    const [expandedRule, setExpandedRule] = React.useState(null);
    const [timeLeft, setTimeLeft] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    React.useEffect(() => {
        const calculateTimeRemaining = () => {
            const now = new Date();
            const target = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 12, 30, 0, 0));
            const currentDay = now.getUTCDay(); 
            let daysUntilFriday = (5 - currentDay + 7) % 7;

            if (daysUntilFriday === 0 && now.getTime() >= target.getTime()) {
                daysUntilFriday = 7; 
            }

            target.setUTCDate(target.getUTCDate() + daysUntilFriday);
            const difference = target.getTime() - now.getTime();

            if (difference <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        };

        calculateTimeRemaining();
        const timer = setInterval(calculateTimeRemaining, 1000);
        return () => clearInterval(timer);
    }, []);

    React.useEffect(() => {
        const fetchServerInfo = async () => {
            const targetUrl = `https://api.battlemetrics.com/servers/${serverId}`;
            
            const applyData = (json) => {
                const attributes = json.data?.attributes || {};
                const details = attributes.details || {};
                
                setServerData(prev => ({
                    ...prev,
                    name: attributes.name || "[SEA/PH] Chill Beginners 2x",
                    playersOnline: attributes.players ?? 0,
                    maxPlayers: attributes.maxPlayers ?? 100,
                    rank: attributes.rank ?? 1,
                    mapName: details.map || "Procedural Map",
                    worldSize: details.rust_world_size ?? 3500,
                    fps: details.rust_fps ?? 260,
                    queue: details.rust_queued_players ?? attributes.queued ?? 0,
                    uptime: details.rust_uptime ? `${Math.floor(details.rust_uptime / 3600)}h ${Math.floor((details.rust_uptime % 3600) / 60)}m` : "Active (Stable)"
                }));
                setApiStatus('success');
            };

            try {
                setApiStatus('loading');
                const response = await fetch(targetUrl);
                if (response.ok) {
                    const json = await response.json();
                    if (json && json.data) { applyData(json); return; }
                }
                throw new Error();
            } catch (err) {
                const proxies = [
                    `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`,
                    `https://corsproxy.io/?url=${encodeURIComponent(targetUrl)}`
                ];
                for (const proxy of proxies) {
                    try {
                        const response = await fetch(proxy);
                        if (response.ok) {
                            const json = await response.json();
                            if (json && json.data) { applyData(json); return; }
                        }
                    } catch (e) {}
                }
                setApiStatus('error');
            }
        };

        fetchServerInfo();
        const interval = setInterval(fetchServerInfo, 30000);
        return () => clearInterval(interval);
    }, [serverId]);

    const handleCopyIP = () => {
        const el = document.createElement('textarea');
        el.value = serverIp;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const rules = [
        {
            title: "Beginner Friendly Environment",
            icon: "🌲",
            summary: "2x Gather resource boost to keep progression fun and accessible.",
            details: "Balanced resource rates, optimized components, and beginner-focused configuration."
        },
        {
            title: "Team / Group Limits (Max 4)",
            icon: "👥",
            summary: "Strict Quad team management rules.",
            details: "Absolutely no alliance protocols allowed. No cross-teaming or base sharing exceeding 4 authenticated players."
        },
        {
            title: "Anti-Cheat & Clean FPS Performance",
            icon: "🛡️",
            summary: "Zero lag architecture running clean anti-cheat systems.",
            details: "Maintained directly on low-latency network setups. Automated diagnostics block scripts and exploits."
        },
        {
            title: "Chill & Non-Toxic Conduct",
            icon: "💬",
            summary: "Competitive gameplay without the toxic baggage.",
            details: "Racial profiling, slurs, and toxic behavior result in quick permanent bans."
        }
    ];

    const shopPackages = [
        { id: 'bronze', name: 'Eclipse Bronze Perks', price: 'Upcoming Package', statusBadge: 'Upcoming', color: 'border-zinc-800 text-cyan-400 opacity-80', description: 'Exclusive queue priority bypass and community cosmetics coming soon.' },
        { id: 'silver', name: 'Eclipse Silver Perks', price: 'Upcoming Package', statusBadge: 'Upcoming', color: 'border-zinc-800 text-cyan-200 opacity-80', description: 'Advanced custom tags and neon roles coming soon.' },
        { id: 'gold', name: 'Eclipse Platinum Founder', price: 'Upcoming Package', statusBadge: 'Upcoming', color: 'border-zinc-800 text-yellow-300 opacity-80', description: 'Lifetime supporting token perks coming soon.' }
    ];

    return (
        <div className="min-h-screen bg-[#030303] relative scanlines text-gray-100 selection:bg-cyan-500 selection:text-black">
            <div className="absolute inset-0 cyber-grid pointer-events-none z-0"></div>
            <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-950/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

            <header className="sticky top-0 z-40 backdrop-blur-md bg-[#030303]/90 border-b border-cyan-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <span className="font-unbounded text-xl sm:text-2xl font-black text-white tracking-widest text-shadow-cyan uppercase">
                            CHILL 2X <span className="text-cyan-400 font-mono-jb text-xs sm:text-sm ml-2 tracking-normal font-light">// SEA-PH</span>
                        </span>
                        <nav className="hidden md:flex space-x-8 items-center">
                            <a href="#live" className="text-xs font-bold text-gray-400 hover:text-cyan-400 uppercase">Live Info</a>
                            <a href="#stats" className="text-xs font-bold text-gray-400 hover:text-cyan-400 uppercase">Telemetry</a>
                            <a href="#rules" className="text-xs font-bold text-gray-400 hover:text-cyan-400 uppercase">Rules</a>
                            <a href="#team" className="text-xs font-bold text-gray-400 hover:text-cyan-400 uppercase">Administration</a>
                        </nav>
                        <a href={discordLink} target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center px-5 py-2 border border-cyan-900 bg-cyan-950/30 text-white font-semibold text-xs tracking-wider uppercase hover:bg-cyan-400 hover:text-black transition-all">
                            <Icons.Discord /> Discord
                        </a>
                    </div>
                </div>
            </header>

            <section id="live" className="relative pt-12 pb-24 px-4 max-w-7xl mx-auto z-10">
                <div className="inline-flex items-center gap-2 bg-[#050505] border border-cyan-950 rounded-full px-4 py-1.5 mb-8">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="font-mono-jb text-[10px] sm:text-xs text-gray-400 uppercase">Server Online • Asia • SEA • PH</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 space-y-6">
                        <h1 className="font-unbounded text-5xl sm:text-7xl font-black text-white uppercase leading-none">
                            Chill Beginners <br /><span className="text-cyan-400 text-shadow-cyan">2X GATHER</span>
                        </h1>
                        <p className="text-gray-400 max-w-xl">Purpose-built modern Rust layout serving Southeast Asian and Philippine players. Low pings, active admins, stable high FPS setups.</p>
                        
                        <div className="flex flex-wrap gap-4">
                            <a href={`steam://connect/${serverIp}`} className="px-8 py-4 bg-cyan-400 text-black font-extrabold uppercase text-xs hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"><Icons.Lightning /> Join Server</a>
                            <button onClick={handleCopyIP} className="px-6 py-4 bg-zinc-950 border border-cyan-950 text-cyan-400 font-bold uppercase text-xs hover:border-cyan-400 transition-all">{copied ? "Copied!" : "Copy IP"}</button>
                        </div>
                    </div>

                    <div className="lg:col-span-5 space-y-4">
                        <div className="bg-black/60 p-6 border border-zinc-900/80 relative">
                            <div className="text-gray-400 font-mono-jb text-[10px] uppercase mb-1">ONLINE PLAYERS</div>
                            <div className="font-unbounded text-5xl font-black text-white">{apiStatus === 'loading' ? "..." : serverData.playersOnline}<span className="text-gray-500 text-lg">/{serverData.maxPlayers}</span></div>
                        </div>
                        <div className="bg-black/60 p-6 border border-zinc-900/80 relative">
                            <div className="text-gray-400 font-mono-jb text-[10px] uppercase mb-1">CONNECT IP</div>
                            <div className="text-cyan-400 font-mono-jb text-sm sm:text-base font-semibold tracking-wider select-all break-all">{serverIp}</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 pb-12 max-w-7xl mx-auto z-10">
                <div className="bg-gradient-to-r from-cyan-950/20 to-black/90 border border-cyan-400/30 p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                    <div className="space-y-2">
                        <span className="bg-cyan-500 text-black text-[9px] font-black px-2.5 py-0.5 uppercase">LIVE MAP</span>
                        <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-unbounded">View Live Procedural Map Coordinates</h3>
                    </div>
                    <a href={battlemetricsLink} target="_blank" rel="noreferrer" className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-extrabold uppercase text-xs transition-all"><Icons.Map /> View Map Coordinates</a>
                </div>
            </section>

            <section id="stats" className="py-20 bg-black/40 border-y border-cyan-950 px-4 max-w-7xl mx-auto z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-[#050505] p-6 border border-zinc-900/60">
                        <div className="text-gray-500 text-[10px] uppercase mb-1">Server Performance</div>
                        <div className="text-2xl font-unbounded font-bold text-white">{serverData.fps} FPS</div>
                    </div>
                    <div className="bg-[#050505] p-6 border border-zinc-900/60">
                        <div className="text-gray-500 text-[10px] uppercase mb-1">Wipe Cycle</div>
                        <div className="text-2xl font-unbounded font-bold text-cyan-400">WEEKLY</div>
                    </div>
                    <div className="bg-[#050505] p-6 border border-zinc-900/60">
                        <div className="text-gray-500 text-[10px] uppercase mb-1">Max Team Size</div>
                        <div className="text-2xl font-unbounded font-bold text-white">QUAD (4)</div>
                    </div>
                    <div className="bg-[#050505] p-6 border border-zinc-900/60">
                        <div className="text-gray-500 text-[10px] uppercase mb-1">Next Wipe Countdown</div>
                        <div className="text-md font-mono-jb text-yellow-400">{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</div>
                    </div>
                </div>
            </section>

            <section id="rules" className="py-24 px-4 max-w-5xl mx-auto z-10">
                <h2 className="font-unbounded text-2xl font-black text-white uppercase text-center mb-12">Server Rules Index</h2>
                <div className="space-y-4">
                    {rules.map((rule, idx) => (
                        <div key={idx} onClick={() => setExpandedRule(expandedRule === idx ? null : idx)} className="bg-[#050505] p-6 border border-zinc-900 hover:border-cyan-950 cursor-pointer transition-all">
                            <div className="flex items-center gap-4">
                                <span className="text-xl">{rule.icon}</span>
                                <h3 className="font-bold text-white uppercase font-unbounded text-sm">{rule.title}</h3>
                            </div>
                            {expandedRule === idx && <p className="text-gray-400 text-xs mt-4 pt-4 border-t border-zinc-900 leading-relaxed">{rule.details}</p>}
                        </div>
                    ))}
                </div>
            </section>

            <footer className="bg-black border-t border-zinc-900/60 py-12 px-4 max-w-7xl mx-auto text-gray-500 text-xs flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="font-unbounded text-sm font-black text-white tracking-widest uppercase">CHILL 2X</div>
                <p>© 2026 Chill Beginners. Not affiliated with Facepunch Studios.</p>
            </footer>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);