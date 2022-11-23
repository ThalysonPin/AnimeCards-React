import React from 'react'

export const Section = ({Title, Subtitle, children}) => {
  return (
    <div>
        <section>
            <div>
                <h2>{Title}</h2>
                <p>{Subtitle}</p>
                <ul class="games-list">
                    {/* itens da lista {childrens} */}
                    {children}
                </ul>
            </div>
        </section>
    </div>
  )
}
