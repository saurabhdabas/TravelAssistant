import React from 'react'


export default function Header({brand,username,email}) {
  return (
    <div className='header'>
      <div className='header__top-section'>
        <div className='header__brand-wrapper'>
          <img className='header__brand-logo' src = "../beach1.png" alt='logo'/>
          <h2 className='header__brand-name'>{`${brand}`}</h2>
          <h4>Let's explore the world together</h4>
        </div>
        <h3 className='header__welcome-message'>{`Welcome, ${username}`}</h3>
      </div>
      <div className='header__bottom-section'>
          <img className='header__avatar' src="https://i.pravatar.cc/40?img=13" alt='user-avatar'/>
          <h4 className='header__login-detail'>{`logged in as : ${email}`}</h4>
      </div>
    </div>
  )
}
