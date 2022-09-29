import * as React from 'react';
import { Button } from './Button';

export function Profile() {
  const user = {
    name: 'Jana',
    src: 'https://i.pravatar.cc/200',
  };

  const profileMenu = ['about', 'portfolio', 'contact'];

  const profileItems = profileMenu.map((item, index) => {
    return <li>{item}</li>;
  });

  return (
    <div className="profile">
      <h2>{user.name}</h2>
      <img src={user.src} alt="Avatar picture" className="avatar" />
      <Button />
      <ul className="profile-menu">{profileItems}</ul>
    </div>
  );
}
