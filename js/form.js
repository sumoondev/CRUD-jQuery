// Create Form Element
function createForm() {
    var $form = $("<form></form>");

    $form.html(`
    <h1 style="text-align: center;padding-bottom: 1rem;">Grocery List</h1>
    <div class="form-control">
      <input
        type="text"
        class="form-input"
        placeholder="e.g. Apples"
      />
      <button type="submit" class="btn">
        <i class="fa-regular fa-square-plus"></i>
      </button>
    </div>
  `);

    $form.on("submit", function (e) {
        e.preventDefault();
        var $input = $form.find(".form-input");
        var value = $.trim($input.val());

        if (!value) {
            alert("Please provide value");
            return;
        }

        addItem(value);
        $input.val("");
    });

    return $form;
}
