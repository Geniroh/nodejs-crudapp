$("#add_user").submit((e) => {
  alert("Data inserted successfully");
});

$("#update_user").submit((e) => {
  e.preventDefault();

  const unindexed_array = $("#update_user").serializeArray();
  const data = {};
  $.map(unindexed_array, (n, i) => {
    data[n["name"]] = n["value"];
  });
  //   console.log(data);

  const request = {
    url: `http://localhost:3000/api/users/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done((response) => {
    alert("Data Updated Successfully!");
  });
});

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");

    var request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: "DELETE",
    };

    if (confirm("Do you really want to delete this record?")) {
      $.ajax(request).done(function (response) {
        alert("Data Deleted Successfully!");
        location.reload();
      });
    }
  });
}
