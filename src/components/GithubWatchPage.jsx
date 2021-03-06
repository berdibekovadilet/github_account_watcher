import React from "react";
import "./GithubWatchPage.css";

function GithubWatchPage() {
  return (
    <div class="app-container">
      <form class="app-form">
        <input
          type="text"
          class="app-input"
          placeholder="Укажите GitHub-аккаунт"
        />
        <button class="app-form_btn">Найти</button>
      </form>
      <div class="app-user">
        <div class="app-user_info">
          <div class="app-user_image">
            <img src="./assets/img/avatar.png" alt="" />
          </div>
          <div class="app-user_data">
            <h1 class="app-user_name">
              Archakov Dennis
              <span>@archakov06</span>
            </h1>
            <p class="app-user_about">
              Frontend Developer. UI Designer. JavaScript ❤️ ReactJS ⚛ React
              Native, NodeJS, PHP
            </p>
          </div>
        </div>
        <ul class="app-user_stats">
          <li class="app-user_stats-item">
            Репозитории
            <span>124</span>
          </li>
          <li class="app-user_stats-item">
            Подписчиков
            <span>1.2к</span>
          </li>
          <li class="app-user_stats-item">
            Звёзд
            <span>506</span>
          </li>
        </ul>
        <ul class="app-user_location">
          <li class="app-user_location-item">Russia, Ingushetia, Nazran</li>
          <li class="app-user_location-item">
            <a href="http://archakov.im">http://archakov.im</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GithubWatchPage;
