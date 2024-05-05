window.addEventListener('load', () => {
  const amenityIds = {};
  $('input[type=checkbox]').change(function () {
    if ($(this).prop('checked')) {
      amenityIds[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenityIds[$(this).attr('data-id')];
    }
    updateAmenitiesDisplay(amenityIds);
  });
  
  function updateAmenitiesDisplay(amenityIds) {
    const amenitiesList = Object.values(amenityIds).join(', ');
    $('div.amenities h4').text(amenitiesList || '\u00A0');
  }
});

