const React = require('react')
const Default = require('./layouts/default')

function Index({ breads, title}) {
    const display = breads.map((bread, i,) => {
        return (
            <li key={i}>
                <a href={`/breads/${i}`}>{bread.name}</a>
                
            </li>
        )
    })

    return (
      <Default title={title}>
        <h2>Index Page</h2>
        <div className='newButton'>
            <a href='/breads/new'>
                <button>
                    Add a new bread
                </button>
            </a>
        </div>
        <ul>
            {display}
        </ul>
      </Default>
    )
}

module.exports = Index