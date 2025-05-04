export default function Skills() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-pink-400 mb-4">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-gray-300 font-mono whitespace-pre-wrap">
        <div>
          <span className="text-cyan-300">Languages:</span> Python · JavaScript
          · TypeScript · SQL · PHP
        </div>
        <div>
          <span className="text-cyan-300">Frameworks:</span> Cypress · Symfony ·
          Flask · Node.js · React
        </div>
        <div>
          <span className="text-cyan-300">Tools:</span> Git · Docker · GitHub
          Actions · Postman · OpenSearch
        </div>
        <div>
          <span className="text-cyan-300">Testing:</span> Unit · Integration ·
          E2E · Foundry (Symfony factories)
        </div>
        <div>
          <span className="text-cyan-300">Cloud:</span> AWS
        </div>
      </div>
    </div>
  );
}
