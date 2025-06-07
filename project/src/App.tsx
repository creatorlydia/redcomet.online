import React, { useState, useEffect } from 'react';
import { Play, Zap, Shield, Target, Users, Star, ChevronDown } from 'lucide-react';

function App() {
  const [gameLoaded, setGameLoaded] = useState(false);
  const [showGame, setShowGame] = useState(false);

  useEffect(() => {
    // Simulate game loading
    const timer = setTimeout(() => setGameLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToGame = () => {
    setShowGame(true);
    setTimeout(() => {
      document.getElementById('game-section')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning-Fast Action",
      description: "Experience intense, real-time combat with smooth 60 FPS gameplay"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Strategic Defense",
      description: "Build defenses and upgrade weapons to survive longer against monster waves"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Combat",
      description: "Master your aim and timing to eliminate threats with maximum efficiency"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Global Leaderboards",
      description: "Compete with players worldwide and climb the survival rankings"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Red Comet
              </span>
            </div>
            <button
              onClick={scrollToGame}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            >
              Play Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                Red Comet
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Survive endless waves of monsters in this epic browser-based survival shooter
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={scrollToGame}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 group"
              >
                <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span>Start Playing</span>
              </button>
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">4.8/5 Rating</span>
                </div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-sm">Free to Play</span>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <ChevronDown className="w-6 h-6 text-gray-400 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Game Section */}
      {showGame && (
        <section id="game-section" className="py-12 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Play Red Comet Online
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Jump straight into the action with our browser-based gameplay. No downloads required!
              </p>
            </div>
            
            <div className="relative bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
              {!gameLoaded ? (
                <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p className="text-white text-lg">Loading Red Comet...</p>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html"
                  className="w-full aspect-video"
                  frameBorder="0"
                  allowFullScreen
                  title="Red Comet - Monster Survival Game"
                  loading="lazy"
                ></iframe>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Players Love Red Comet
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover what makes Red Comet the ultimate monster survival experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Description Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
              About Red Comet: Monster Survival Game
            </h2>
            
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <p className="text-xl text-center text-gray-600 mb-12">
                Red Comet delivers an intense monster survival experience that will test your reflexes, strategy, and endurance in an epic battle for survival.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Gameplay Overview</h3>
                  <p>
                    In Red Comet, you find yourself in a hostile world overrun by monstrous creatures. Armed with an arsenal of upgradeable weapons, your mission is simple: survive as long as possible against increasingly challenging waves of enemies.
                  </p>
                  <p>
                    The game features fast-paced action where every second counts. As you eliminate monsters, you'll collect resources to upgrade your weapons, improve your defenses, and unlock new abilities that will help you survive even longer.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Endless waves of unique monsters with increasing difficulty</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Comprehensive weapon upgrade system</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Strategic power-ups and special abilities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Leaderboard system to compete with other players</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Smooth browser-based gameplay with no downloads required</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategy and Tips</h3>
                <p>
                  Success in Red Comet requires more than just quick reflexes. Players must balance offensive capabilities with defensive positioning, manage resources efficiently, and adapt their strategy as new monster types emerge. The key to achieving high scores lies in understanding each enemy's behavior patterns and maximizing the effectiveness of your weapon upgrades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Test Your Survival Skills?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of players in the fight for survival. How long can you last against the monster horde?
          </p>
          <button
            onClick={scrollToGame}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
          >
            Play Red Comet Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Red Comet</span>
            </div>
            <p className="text-gray-400 mb-4">
              The ultimate monster survival game experience
            </p>
            <p className="text-sm text-gray-500">
              © 2025 Red Comet Online. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;