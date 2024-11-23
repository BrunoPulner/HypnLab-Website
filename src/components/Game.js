import "./css/Game.css";

function Game() {
  return (
    <section id="game">
      <div className="mensageWelcome">
        <h2>Welcome to HypnLab</h2>
      </div>
      <div className="container-game">
        {/* Início da seção Game Overview */}
        <div className="game-overview">
          <h2>Game Overview</h2>
          <h3>Unleash Your Imagination in a Boundless MMORPG</h3>
          <p>
            HypnLab is not just a game – it’s an immersive universe. Set in a
            world where mystical forces collide with cutting-edge steampunk
            technology, HypnLab offers players the freedom to explore, create,
            and conquer. Built with Unreal Engine 5, the game combines stunning
            visuals with groundbreaking gameplay that merges traditional MMORPG
            mechanics with blockchain innovation.
          </p>
        </div>
        {/* Fim da seção Game Overview */}

        {/* Início da seção The World of HypnLab */}

        <div className="world-overview">
          <h2>The World of HypnLab</h2>
          <div className="unique-universe">
            <h3>A Unique Universe</h3>
            <p>
              HypnLab’s open-world environment is a playground for adventurers.
              Divided into distinct regions, from medieval kingdoms to
              futuristic cities, every area is rich with lore, mysteries, and
              challenges. Each race has its own story, abilities, and culture,
              creating an immersive experience that feels alive.
            </p>
          </div>
          <div className="key-features">
            <h3>Key Features of the World</h3>
            <ul>
              <li>
                <strong>Dynamic Day-Night Cycle:</strong> Experience how the
                world evolves with time, from peaceful sunrises to dangerous
                nights.
              </li>
              <li>
                <strong>Diverse Regions:</strong> Explore a medieval kingdom
                filled with castles, enchanted forests, and urban steampunk
                landscapes.
              </li>
              <li>
                <strong>Rich Lore:</strong> Dive deep into the lore, crafted by
                expert storytellers, that gives every character and event
                meaningful context.
              </li>
            </ul>
          </div>
        </div>
        {/* Fim da seção The World of HypnLab */}

        {/* Início da seção Gameplay Features */}
        <div className="gameplay-features">
          <h2>Gameplay Features</h2>
          <div className="create-hero">
            <h3>Create Your Hero</h3>
            <p>
              Choose from a variety of classes and races, each with unique
              traits and abilities. Customize your character’s appearance, gear,
              and skills to reflect your playstyle.
            </p>
          </div>
          <div className="battle-conquer">
            <h3>Battle and Conquer</h3>
            <ul>
              <li>
                <strong>Real-Time Combat System:</strong> Engage in dynamic
                battles with powerful skills and strategic moves.
              </li>
              <li>
                <strong>Unique Abilities:</strong> Unlock race-specific
                abilities and class-driven skill trees.
              </li>
              <li>
                <strong>PvP and PvE:</strong> Battle AI-controlled monsters or
                face off against other players in high-stakes duels.
              </li>
            </ul>
          </div>
          <div className="build-thrive">
            <h3>Build and Thrive</h3>
            <ul>
              <li>
                <strong>Player Housing:</strong> Own and customize your home in
                the game world.
              </li>
              <li>
                <strong>Player Economy:</strong> Use our blockchain-powered
                marketplace to trade items and assets securely.
              </li>
              <li>
                <strong>Mounts and Pets:</strong> Acquire rare pets and mounts
                to accompany you on your journey.
              </li>
            </ul>
          </div>
        </div>
        {/* Fim da seção Gameplay Features */}

        {/* Início da seção Blockchain Integration */}
        <div className="blockchain-integration">
          <h2>Innovative Blockchain Integration</h2>
          <div className="true-ownership">
            <h3>True Ownership</h3>
            <p>
              In HypnLab, you truly own your in-game assets. Thanks to
              blockchain technology, every item, weapon, or piece of equipment
              is an NFT that you can trade, sell, or collect.
            </p>
          </div>
          <div className="play-to-earn">
            <h3>Play-to-Earn Economy</h3>
            <p>
              Earn valuable rewards through gameplay, quests, and battles. The
              in-game economy allows you to trade rare items with other players,
              turning your time in-game into real-world value.
            </p>
          </div>
        </div>
        {/* Fim da seção Blockchain Integration */}

        {/* Início da seção Unreal Engine 5 */}
        <div className="unreal-engine">
          <h2>Powered by Unreal Engine 5</h2>
          <div className="next-gen-graphics">
            <h3>Next-Gen Graphics</h3>
            <p>
              HypnLab takes full advantage of Unreal Engine 5 to deliver
              breathtaking visuals and a seamless gaming experience. From
              lifelike environments to fluid animations, every detail is
              designed to immerse you in the world.
            </p>
          </div>
          <div className="scalable-performance">
            <h3>Scalable Performance</h3>
            <p>
              Whether you’re playing on a high-end gaming PC or the latest
              console, HypnLab’s engine ensures optimal performance without
              compromising quality.
            </p>
          </div>
        </div>
        {/* Fim da seção Unreal Engine 5 */}

        {/* Início da seção Vision */}
        <div className="visionContent">
          <h2>The Vision</h2>
          <h3>More Than a Game</h3>
          <p>
            HypnLab aims to bridge the gap between the physical and digital
            worlds, creating an ecosystem where players are in control. With an
            innovative metaverse-like environment, the game empowers players to
            connect, collaborate, and grow.
          </p>
        </div>
        {/* Fim da seção Vision */}

        {/* Início da seção Join the Community */}
        <div className="community">
          <h2>Join the Community</h2>
          <h3>Become Part of the HypnLab Experience</h3>
          <p>
            Stay updated with our latest development updates, participate in
            beta testing, and engage with other players as we build this
            universe together.
          </p>
        </div>
        {/* Fim da seção Join the Community */}
      </div>
    </section>
  );
}

export default Game;
