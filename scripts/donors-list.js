function donorsList() {
  function filterTрroughButton() {
    const buttons = document.querySelectorAll(".button-filter");
    const types = document.querySelectorAll(".type");

    function filterCategory(bloodType, item) {
      item.forEach((item) => {
        const currentItemBloodType =
          item.querySelector("#table-blood").innerHTML;
        const isItemFiltered = currentItemBloodType === bloodType;
        console.log(currentItemBloodType);
        const isShowAll = bloodType.toLowerCase() === "all";
        if (!isItemFiltered && !isShowAll) {
          item.classList.add("hide");
        } else {
          item.classList.remove("hide");
        }
      });
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const demo = button.dataset.letter;
        console.log(types);
        filterCategory(demo, types);
      });
    });
  }

  filterTрroughButton();

  document.querySelectorAll(".accordion").forEach((el) => {
    el.addEventListener("click", () => {
      let content = el.nextElementSibling;

      if (content.style.maxHeight) {
        document
          .querySelectorAll(".content")
          .forEach((el) => (el.style.maxHeight = null));
      } else {
        document
          .querySelectorAll(".content")
          .forEach((el) => (el.style.maxHeight = null));
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
  GetDonors();
}
const search = () => {
  const searchBox = document.getElementById("input").value.toUpperCase();
  const items = document.getElementById("table-users");
  const users = document.querySelectorAll(".type");
  const pname = items.querySelectorAll(".table-username");
  console.log("PNAME", pname);
  for (let i = 0; i < pname.length; i++) {
    let match = users[i].querySelector(".table-username");
    console.log("MATCH", users[i]);
    if (match) {
      let textValue = match.textContent || match.innerHTML;
      console.log(textValue.toUpperCase().indexOf(searchBox) > -1);
      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        users[i].style.display = "";
      } else {
        users[i].style.display = "none";
      }
    }
  }
};

let donorsServerList;
async function GetDonors() {
  const query = new Parse.Query("User");
  try {
    let donors = await query.find();
    donorsServerList = donors.filter((donor) => {
      return donor.attributes.role === "donor" ? true : false;
    });
  } catch {
    console.log("error");
  }
  const donorsTable = document.getElementById("tableDonors");
  const donorsHTML = donorsServerList.map((donor) => {
    const donorHTML = `<tr class="type">
    <td>1</td>
    <td>
      <img
        src=${donor.attributes.image}
        alt="donor-image"
        width="100"
        height="100"
      />
    </td>
    <td class="table-username">${donor.attributes.fullname}</td>
    <td id="table-blood">${donor.attributes.bloodType}</td>
    <td>${donor.attributes.bloodRez}</td>
    <td>${donor.attributes.donationCount}</td>
  </tr>`;
    donorsTable.innerHTML += donorHTML;
  });
  console.log(donorsTable);
}
