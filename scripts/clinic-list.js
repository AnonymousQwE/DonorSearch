function clinicsList() {
  GetClinics();
  async function GetClinics() {
    let clinicsServerList;
    const query = new Parse.Query("User");
    try {
      let clinics = await query.find();
      clinicsServerList = clinics.filter((user) => {
        return user.attributes.role === "clinic" ? true : false;
      });
    } catch {
      console.log("error");
    }
    const clinicsTable = document.getElementById("tableClinics");
    const clinicsHTML = clinicsServerList.map((clinic, id) => {
      const clinicHTML = `<tr class="type">
    <td>${id + 1}</td>
    <td>
      <img
        src=${clinic.attributes.image}
        alt="donor-image"
        width="100"
        height="100"
      />
    </td>
    <td class="table-username">${clinic.attributes.fullname}</td>
    <td id="table-blood">${
      clinic.attributes.address ? clinic.attributes.address : "Неизвестно"
    }</td>
    <td>${clinic.attributes.contacts ? clinic.attributes.contacts : "Неизвестно"}</td>
  </tr>`;
      clinicsTable.innerHTML += clinicHTML;
    });
    console.log(clinicsTable);
  }
}
