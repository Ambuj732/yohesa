import React, { useEffect } from "react";
import "../bower_components/Ionicons/css/ionicons.min.css";
import "../bower_components/font-awesome/css/font-awesome.min.css";
import "../dist/css/AdminLTE.min.css";
import "../dist/css/skins/_all-skins.min.css";
import "../bower_components/morris.js/morris.css";
import "../bower_components/jvectormap/jquery-jvectormap.css";
import "../bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import "../bower_components/bootstrap/dist/css/bootstrap.min.css";
import "../plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css";

export default function Footer() {
  useEffect(() => {
    // jQuery equivalent replacements in React
    const handleDataTable = () => {
      const example1 = document.getElementById("example1");
      const example2 = document.getElementById("example2");
      if (example1 && example2) {
        // Assume these are initialized appropriately with DataTables
        // DataTable init code here if required
      }
    };

    const handleCKEditor = () => {
      if (window.CKEDITOR) {
        window.CKEDITOR.replace("editor1");
        const textareas = document.querySelectorAll(".textarea");
        textareas.forEach((textarea) => {
          // Initialize WYSIHTML5 if needed
        });
      }
    };

    handleDataTable();
    handleCKEditor();

    const handleClock = () => {
      const clock2 = document.querySelector(".clock2");
      const tick = () => {
        const now = new Date();
        const digitalClock = now.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        });
        if (clock2) clock2.innerHTML = digitalClock;
      };
      setInterval(tick, 1000);
    };
    handleClock();

    const handleCalendar = () => {
      let display = document.querySelector(".display");
      let days = document.querySelector(".days");
      let previous = document.querySelector(".left");
      let next = document.querySelector(".right");
      let selected = document.querySelector(".selected");

      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();

      const displayCalendar = () => {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const firstDayIndex = firstDay.getDay();
        const numberOfDays = lastDay.getDate();

        const formattedDate = date.toLocaleString("en-US", {
          month: "long",
          year: "numeric",
        });

        if (display) display.innerHTML = `${formattedDate}`;
        if (days) {
          days.innerHTML = "";
          for (let x = 1; x <= firstDayIndex; x++) {
            const div = document.createElement("div");
            days.appendChild(div);
          }

          for (let i = 1; i <= numberOfDays; i++) {
            let div = document.createElement("div");
            let currentDate = new Date(year, month, i);

            div.dataset.date = currentDate.toDateString();
            div.innerHTML += i;
            days.appendChild(div);

            if (
              currentDate.getFullYear() === new Date().getFullYear() &&
              currentDate.getMonth() === new Date().getMonth() &&
              currentDate.getDate() === new Date().getDate()
            ) {
              div.classList.add("current-date");
            }
          }
        }
      };

      const updateCalendar = (direction) => {
        days.innerHTML = "";
        selected.innerHTML = "";

        month += direction;
        if (month < 0) {
          month = 11;
          year -= 1;
        } else if (month > 11) {
          month = 0;
          year += 1;
        }

        date.setMonth(month);
        displayCalendar();
        displaySelected();
      };

      const displaySelected = () => {
        const dayElements = document.querySelectorAll(".days div");
        dayElements.forEach((day) => {
          day.addEventListener("click", (e) => {
            const selectedDate = e.target.dataset.date;
            if (selected) selected.innerHTML = `Selected Date: ${selectedDate}`;
          });
        });
      };

      if (previous)
        previous.addEventListener("click", () => updateCalendar(-1));
      if (next) next.addEventListener("click", () => updateCalendar(1));

      displayCalendar();
      displaySelected();
    };
    handleCalendar();
  }, []);

  return (
    <footer className="main-footer">
      <div className="pull-right hidden-xs"></div>
      <strong>
        Copyright &copy; 2024 <a href="#">Yohesa</a>.
      </strong>{" "}
      All rights reserved.
    </footer>
  );
}
