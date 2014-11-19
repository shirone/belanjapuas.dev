angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

.factory('resAndroid', function ($resource) {
    // return $resource('http://belanjapuas.dev/android/:param',{},{
    return $resource('http://10.0.2.2/android/:param',{},{
        getLogin: {method:'POST',params:{param:'login'}},
        getProduk: {method:'POST',params:{param:'produk'}},
        getProdukDetail : {method:'POST',params:{param:'detail_produk'}},
        getKategori : {method:'POST',params:{param:'kategoriList'}},
        getKategoriList : {method:'POST',params:{param:'spinKategori'}},
        saveProduk : {method:'POST',params:{param:'tambah_produk'}},
        updateProduk : {method:'POST',params:{param:'updateProdukAndroid'}},
        akunAdmin:{method:'POST',params:{param:'akunadmin'}},
        saveAdmin:{method:'POST',params:{param:'updateakuadmin'}},
        savePass:{method:'POST',params:{param:'updateakuadminpassword'}},
        getMember:{method:'POST',params:{param:'member'}},
        getMemberDetail:{method:'POST',params:{param:'memberDetails'}},
        saveMember:{method:'POST',params:{param:'savememberDetails'}},
        saveKategori:{method:'POST',params:{param:'savekategori'}},
        kategori_lv1:{method:'POST',params:{param:'kategori_lv1'}},
        savekategorilvl:{method:'POST',params:{param:'savekategorilvl'}},
        kategoryDetail:{method:'POST',params:{param:'kategoriDetail'}},
    });
  })

;
