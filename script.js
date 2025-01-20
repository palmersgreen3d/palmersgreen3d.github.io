TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "cardboardMenu": {
   "class": "Menu",
   "fontFamily": "Arial",
   "rollOverOpacity": 0.8,
   "id": "Menu_FFF0CDBF_8A6F_26C7_41D1_AC1F2ED35CF8",
   "label": "Media",
   "backgroundColor": "#404040",
   "rollOverFontColor": "#FFFFFF",
   "rollOverBackgroundColor": "#000000",
   "children": [
    {
     "class": "MenuItem",
     "label": "MAIN ENTRANCE CORRIDOR",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "class": "MenuItem",
     "label": "MAIN BATHROOM",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "class": "MenuItem",
     "label": "CORRIDOR(A)",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "class": "MenuItem",
     "label": "MAIN BEDROOM ENSUITE1",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "class": "MenuItem",
     "label": "MAIN BEDROOM ENSUITE2",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    },
    {
     "class": "MenuItem",
     "label": "MAIN BEDROOM ENSUITE3",
     "click": "this.mainPlayList.set('selectedIndex', 5)"
    },
    {
     "class": "MenuItem",
     "label": "ENSUITE BATHROOM",
     "click": "this.mainPlayList.set('selectedIndex', 6)"
    },
    {
     "class": "MenuItem",
     "label": "KITCHEN VIEW1",
     "click": "this.mainPlayList.set('selectedIndex', 7)"
    },
    {
     "class": "MenuItem",
     "label": "KITCHEN VIEW2",
     "click": "this.mainPlayList.set('selectedIndex', 8)"
    },
    {
     "class": "MenuItem",
     "label": "KITCHEN VIEW3",
     "click": "this.mainPlayList.set('selectedIndex', 9)"
    },
    {
     "class": "MenuItem",
     "label": "KITCHEN VIEW4",
     "click": "this.mainPlayList.set('selectedIndex', 10)"
    },
    {
     "class": "MenuItem",
     "label": "CORRIDOR(B)",
     "click": "this.mainPlayList.set('selectedIndex', 11)"
    },
    {
     "class": "MenuItem",
     "label": "CORRIDOR(C)",
     "click": "this.mainPlayList.set('selectedIndex', 12)"
    },
    {
     "class": "MenuItem",
     "label": "BEDROOM2 (A)",
     "click": "this.mainPlayList.set('selectedIndex', 13)"
    },
    {
     "class": "MenuItem",
     "label": "BEDROOM2 (B)",
     "click": "this.mainPlayList.set('selectedIndex', 14)"
    },
    {
     "class": "MenuItem",
     "label": "BEDROOM2 (C)",
     "click": "this.mainPlayList.set('selectedIndex', 15)"
    },
    {
     "class": "MenuItem",
     "label": "CORRIDOR(D)",
     "click": "this.mainPlayList.set('selectedIndex', 16)"
    },
    {
     "class": "MenuItem",
     "label": "BEDROOM3 (A)",
     "click": "this.mainPlayList.set('selectedIndex', 17)"
    },
    {
     "class": "MenuItem",
     "label": "BEDROOM3 (B)",
     "click": "this.mainPlayList.set('selectedIndex', 18)"
    }
   ],
   "opacity": 0.4,
   "selectedFontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "fontColor": "#FFFFFF"
  },
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "inertia": true,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false,
      "id": "panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_tcap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 3536,
         "width": 3536,
         "url": "media/panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "hfov": 45
     },
     {
      "rollOverDisplay": false,
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "id": "overlay_99F242A2_8A75_22F9_41BE_B03E34B6B94D",
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_9E0F6178_8A73_7E49_41CD_0B99A50D4B37, {'rollOverIconHeight':20,'pressedBorderColor':'#000000','borderColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'iconColor':'#000000','rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'paddingBottom':5,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'paddingRight':5,'iconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','iconHeight':20,'rollOverBorderColor':'#000000','pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_999192E8_8A6D_224A_41DA_C7EEA5CCD39C, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 5.01,
        "pitch": -6.19,
        "hfov": 9.06,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 164,
           "width": 162,
           "url": "media/panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_0_HS_0_0.png"
          }
         ]
        }
       }
      ]
     },
     {
      "hideDuration": 500,
      "class": "PopupPanoramaOverlay",
      "yaw": 5.01,
      "popupMaxWidth": "95%",
      "id": "popup_9E0F6178_8A73_7E49_41CD_0B99A50D4B37",
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "rotationZ": 0,
      "showDuration": 500,
      "hfov": 6.09,
      "popupMaxHeight": "95%",
      "rotationX": 0,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 1024,
         "width": 682,
         "url": "media/popup_9E0F6178_8A73_7E49_41CD_0B99A50D4B37_0_3.jpeg"
        }
       ]
      },
      "rotationY": 0,
      "pitch": -6.19
     },
     {
      "rollOverDisplay": false,
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "id": "overlay_99A4F380_8A6F_62B9_41DD_6163FB4C48A5",
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_8386CF65_8A2D_E27B_41DE_342D3BCFF3EF, this.camera_FE7DEE3D_8A6F_25CB_41AC_C7BA5F43B402); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 101.89,
        "pitch": -22.1,
        "hfov": 12.88,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 244,
           "width": 248,
           "url": "media/panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_0_HS_1_0.png"
          }
         ]
        }
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "id": "overlay_9C8E3072_8A53_3E59_41DB_C1D8BD460941",
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_839F4535_8A2D_E7DB_41D1_485537003BDE, this.camera_FE650E33_8A6F_25DF_41BE_92FF61AC42C3); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 4.75,
        "pitch": -23.16,
        "hfov": 13.76,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 271,
           "width": 267,
           "url": "media/panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_0_HS_2_0.png"
          }
         ]
        }
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD.jpeg"
      }
     ]
    }
   }
  ],
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "backwardYaw": -171.83,
    "yaw": 4.75,
    "distance": 1,
    "panorama": {
     "cardboardMenu": "this.Menu_FFF0CDBF_8A6F_26C7_41D1_AC1F2ED35CF8",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "inertia": true,
         "class": "TripodCapPanoramaOverlay",
         "rotate": false,
         "id": "panorama_839F4535_8A2D_E7DB_41D1_485537003BDE_tcap0",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 3536,
            "width": 3536,
            "url": "media/panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_tcap0.png"
           }
          ]
         },
         "angle": 0,
         "hfov": 45
        },
        {
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_9DCDDDC0_8A55_26B9_41D1_77B410E5FB56",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD, this.camera_FEB63EEB_8A6F_224F_41D7_305B7F1463F9); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -171.83,
           "pitch": -41.32,
           "hfov": 10.44,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 252,
              "width": 248,
              "url": "media/panorama_839F4535_8A2D_E7DB_41D1_485537003BDE_0_HS_0_0.png"
             }
            ]
           }
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_92DD01A6_8A2D_1EF9_41DB_B7656A0295F0",
         "areas": [
          {
           "click": "this.showPopupPanoramaOverlay(this.popup_920A1E06_8A2D_25B9_41DA_78F683B6406D, {'rollOverIconHeight':20,'pressedBorderColor':'#000000','borderColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'iconColor':'#000000','rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'paddingBottom':5,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'paddingRight':5,'iconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','iconHeight':20,'rollOverBorderColor':'#000000','pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_94033BE2_8A2D_6279_41DC_6A8E8BF45C53, null, null, null, null, false)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -79.06,
           "pitch": -6.46,
           "hfov": 13.13,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 238,
              "width": 236,
              "url": "media/panorama_839F4535_8A2D_E7DB_41D1_485537003BDE_0_HS_1_0.png"
             }
            ]
           }
          }
         ]
        },
        {
         "hideDuration": 500,
         "class": "PopupPanoramaOverlay",
         "yaw": -79.06,
         "popupMaxWidth": "95%",
         "id": "popup_920A1E06_8A2D_25B9_41DA_78F683B6406D",
         "hideEasing": "cubic_out",
         "showEasing": "cubic_in",
         "rotationZ": 0,
         "showDuration": 500,
         "hfov": 13.13,
         "popupMaxHeight": "95%",
         "rotationX": 0,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 682,
            "width": 1023,
            "url": "media/popup_920A1E06_8A2D_25B9_41DA_78F683B6406D_0_3.jpeg"
           }
          ]
         },
         "rotationY": 0,
         "pitch": -6.46
        },
        {
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_933E270D_8A2F_23CA_41A4_68D45194F211",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_8382CDC4_8A2D_66B9_41C2_C9CE0B37553A, this.camera_FD7D8F1B_8A6F_23CF_41DA_0DBC7855AD99); this.mainPlayList.set('selectedIndex', 3)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -75.83,
           "pitch": -21.34,
           "hfov": 12.38,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 222,
              "width": 237,
              "url": "media/panorama_839F4535_8A2D_E7DB_41D1_485537003BDE_0_HS_2_0.png"
             }
            ]
           }
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_9464F12C_8A35_3FC9_41D5_85BA8407BD24",
         "areas": [
          {
           "click": "this.showPopupPanoramaOverlay(this.popup_9168F7B6_8A37_22C6_41C8_88DB19595E8A, {'rollOverIconHeight':20,'pressedBorderColor':'#000000','borderColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'iconColor':'#000000','rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'paddingBottom':5,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'paddingRight':5,'iconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','iconHeight':20,'rollOverBorderColor':'#000000','pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_9049CA58_8A35_2249_41D3_F802C129FB1D, null, null, null, null, false)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -67.44,
           "pitch": -6.34,
           "hfov": 9.06,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 164,
              "width": 162,
              "url": "media/panorama_839F4535_8A2D_E7DB_41D1_485537003BDE_0_HS_3_0.png"
             }
            ]
           }
          }
         ]
        },
        {
         "hideDuration": 500,
         "class": "PopupPanoramaOverlay",
         "yaw": -67.44,
         "popupMaxWidth": "95%",
         "id": "popup_9168F7B6_8A37_22C6_41C8_88DB19595E8A",
         "hideEasing": "cubic_out",
         "showEasing": "cubic_in",
         "rotationZ": 0,
         "showDuration": 500,
         "hfov": 9.06,
         "popupMaxHeight": "95%",
         "rotationX": 0,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 683,
            "width": 1024,
            "url": "media/popup_9168F7B6_8A37_22C6_41C8_88DB19595E8A_0_3.jpeg"
           }
          ]
         },
         "rotationY": 0,
         "pitch": -6.34
        },
        {
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_A134C53A_8AF7_67C9_41CB_4372E77B655E",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_83889FAB_8A2D_22CF_41B2_082EF277DF51, this.camera_FD691F12_8A6F_23D9_41C5_50E7B2F595CF); this.mainPlayList.set('selectedIndex', 12)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -5.58,
           "pitch": -27.57,
           "hfov": 14.88,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 287,
              "width": 300,
              "url": "media/panorama_839F4535_8A2D_E7DB_41D1_485537003BDE_0_HS_4_0.png"
             }
            ]
           }
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_CB8CE328_8A54_E3C9_41CA_98BF05B5B072",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_8384D5CA_8A2D_2649_41E0_D5B70B185D2F, this.camera_FD525F08_8A6F_23C9_41C2_08E0A647A008); this.mainPlayList.set('selectedIndex', 16)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -2.24,
           "pitch": -12.84,
           "hfov": 8.96,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 162,
              "width": 164,
              "url": "media/panorama_839F4535_8A2D_E7DB_41D1_485537003BDE_0_HS_5_0.png"
             }
            ]
           }
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_DD550F51_8BF5_225B_41D3_ADFC36BAAD17",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD, this.camera_FD4D5EF5_8A6F_225B_41B4_A23031A7CA92); this.mainPlayList.set('selectedIndex', 7)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 74.47,
           "pitch": -42.91,
           "hfov": 6.73,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 162,
              "width": 164,
              "url": "media/panorama_839F4535_8A2D_E7DB_41D1_485537003BDE_0_HS_6_0.png"
             }
            ]
           }
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_DDE3C761_8BF7_E27B_41B2_5C34361F7E66",
         "areas": [
          {
           "click": "this.mainPlayList.set('selectedIndex', 8)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 62.17,
           "pitch": -27.11,
           "hfov": 8.18,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 162,
              "width": 164,
              "url": "media/panorama_839F4535_8A2D_E7DB_41D1_485537003BDE_0_HS_7_0.png"
             }
            ]
           }
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_D7C05F58_8BFD_2249_41D0_5B3D28D3AD7D",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_8382C812_8A2D_6DD9_41C4_F41E0664D67A, this.camera_FD41CEFF_8A6F_2247_41CB_D4CB845C441F); this.mainPlayList.set('selectedIndex', 10)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 94.06,
           "pitch": -31.06,
           "hfov": 7.87,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 162,
              "width": 164,
              "url": "media/panorama_839F4535_8A2D_E7DB_41D1_485537003BDE_0_HS_8_0.png"
             }
            ]
           }
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_D6D88502_8BF3_67B9_419F_D1F6A653E171",
         "areas": [
          {
           "click": "this.mainPlayList.set('selectedIndex', 9)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 67.18,
           "pitch": -13.44,
           "hfov": 8.94,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 162,
              "width": 164,
              "url": "media/panorama_839F4535_8A2D_E7DB_41D1_485537003BDE_0_HS_9_0.png"
             }
            ]
           }
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_839F4535_8A2D_E7DB_41D1_485537003BDE_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_839F4535_8A2D_E7DB_41D1_485537003BDE_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_839F4535_8A2D_E7DB_41D1_485537003BDE.jpeg"
         }
        ]
       }
      }
     ],
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 4.75,
       "yaw": -171.83,
       "distance": 1,
       "panorama": "this.panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD"
      },
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 161.05,
       "yaw": 74.47,
       "distance": 1,
       "panorama": {
        "cardboardMenu": "this.Menu_FFF0CDBF_8A6F_26C7_41D1_AC1F2ED35CF8",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "inertia": true,
            "class": "TripodCapPanoramaOverlay",
            "rotate": false,
            "id": "panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD_tcap0",
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "height": 3536,
               "width": 3536,
               "url": "media/panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_tcap0.png"
              }
             ]
            },
            "angle": 0,
            "hfov": 45
           },
           {
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_D1A74B7D_8BF5_224B_41B9_B5DC4CBEFCD0",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_839F4535_8A2D_E7DB_41D1_485537003BDE, this.camera_FE09CE50_8A6F_225A_41DC_FA333960EE74); this.mainPlayList.set('selectedIndex', 2)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 161.05,
              "pitch": -52.03,
              "hfov": 5.66,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 162,
                 "width": 164,
                 "url": "media/panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD_0_HS_0_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_D061E7B1_8BF3_E2DA_41D8_28102A4F3BC8",
            "areas": [
             {
              "click": "this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 171.99,
              "pitch": -22.41,
              "hfov": 8.5,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 162,
                 "width": 164,
                 "url": "media/panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD_0_HS_1_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_D14D5C29_8BED_25CB_41D0_319CF6EF6E15",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_8382C812_8A2D_6DD9_41C4_F41E0664D67A, this.camera_FE73FE46_8A6F_25B9_41D9_5665CEDDE844); this.mainPlayList.set('selectedIndex', 10)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 47.28,
              "pitch": -39.72,
              "hfov": 7.07,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 162,
                 "width": 164,
                 "url": "media/panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD_0_HS_2_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_D468B807_8BEC_EDC7_41C8_82242ECAC05D",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_83805C50_8A2D_2659_41DF_0936397503B5, this.camera_FE150E64_8A6F_2279_41E0_465D5AB08B8B); this.mainPlayList.set('selectedIndex', 8)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -51.15,
              "pitch": -54.61,
              "hfov": 5.32,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 162,
                 "width": 164,
                 "url": "media/panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD_0_HS_3_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_D57F58F0_8BEF_EE59_41BD_4C7A61B8EFA2",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_8386F202_8A2D_1DB9_41DA_65E45490DA65, this.camera_FE1E8E5A_8A6F_2249_41D1_D9547658DADA); this.mainPlayList.set('selectedIndex', 9)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -29.12,
              "pitch": -20.28,
              "hfov": 8.62,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 162,
                 "width": 164,
                 "url": "media/panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD_0_HS_4_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_E9248F8A_8A37_22C9_41D5_0DD5E0381474",
            "areas": [
             {
              "click": "this.showPopupPanoramaOverlay(this.popup_EA48137C_8A37_6249_41DA_5900AD052FAE, {'rollOverIconHeight':20,'pressedBorderColor':'#000000','borderColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'iconColor':'#000000','rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'paddingBottom':5,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'paddingRight':5,'iconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','iconHeight':20,'rollOverBorderColor':'#000000','pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_EF3C18C9_8A37_6E4B_41CC_79B7629EB08B, null, null, null, null, false)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 52.25,
              "pitch": -0.88,
              "hfov": 9.11,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 164,
                 "width": 162,
                 "url": "media/panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD_0_HS_5_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "hideDuration": 500,
            "class": "PopupPanoramaOverlay",
            "yaw": 52.25,
            "popupMaxWidth": "95%",
            "id": "popup_EA48137C_8A37_6249_41DA_5900AD052FAE",
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "rotationZ": 0,
            "showDuration": 500,
            "hfov": 9.11,
            "popupMaxHeight": "95%",
            "rotationX": 0,
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "height": 686,
               "width": 1024,
               "url": "media/popup_EA48137C_8A37_6249_41DA_5900AD052FAE_0_3.jpeg"
              }
             ]
            },
            "rotationY": 0,
            "pitch": -0.88
           },
           {
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_E114549F_8A57_26C7_41CB_DBD0F6DBC43E",
            "areas": [
             {
              "click": "this.showPopupPanoramaOverlay(this.popup_E7296DF6_8A57_E659_41D2_B5B09741465C, {'rollOverIconHeight':20,'pressedBorderColor':'#000000','borderColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'iconColor':'#000000','rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'paddingBottom':5,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'paddingRight':5,'iconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','iconHeight':20,'rollOverBorderColor':'#000000','pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_E05A0D52_8A5F_E659_41C5_6194D5FF905C, null, null, null, null, false)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -46.18,
              "pitch": 6.11,
              "hfov": 9.06,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 164,
                 "width": 162,
                 "url": "media/panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD_0_HS_6_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "hideDuration": 500,
            "class": "PopupPanoramaOverlay",
            "yaw": -46.18,
            "popupMaxWidth": "95%",
            "id": "popup_E7296DF6_8A57_E659_41D2_B5B09741465C",
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "rotationZ": 0,
            "showDuration": 500,
            "hfov": 9.06,
            "popupMaxHeight": "95%",
            "rotationX": 0,
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "height": 683,
               "width": 1024,
               "url": "media/popup_E7296DF6_8A57_E659_41D2_B5B09741465C_0_3.jpeg"
              }
             ]
            },
            "rotationY": 0,
            "pitch": 6.11
           },
           {
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_E2E58643_8A57_25BF_41C5_629CA57E9B9E",
            "areas": [
             {
              "click": "this.showPopupPanoramaOverlay(this.popup_E00BFA96_8A54_E2C6_41C7_AB9704405E6B, {'rollOverIconHeight':20,'pressedBorderColor':'#000000','borderColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'iconColor':'#000000','rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'paddingBottom':5,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'paddingRight':5,'iconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','iconHeight':20,'rollOverBorderColor':'#000000','pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_E05ABD53_8A5F_E65F_41AC_DAE55CB5B9CD, null, null, null, null, false)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 5.77,
              "pitch": 3.07,
              "hfov": 9.1,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 164,
                 "width": 162,
                 "url": "media/panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD_0_HS_7_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "hideDuration": 500,
            "class": "PopupPanoramaOverlay",
            "yaw": 5.77,
            "popupMaxWidth": "95%",
            "id": "popup_E00BFA96_8A54_E2C6_41C7_AB9704405E6B",
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "rotationZ": 0,
            "showDuration": 500,
            "hfov": 9.1,
            "popupMaxHeight": "95%",
            "rotationX": 0,
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "height": 683,
               "width": 1024,
               "url": "media/popup_E00BFA96_8A54_E2C6_41C7_AB9704405E6B_0_3.jpeg"
              }
             ]
            },
            "rotationY": 0,
            "pitch": 3.07
           },
           {
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_E3D4BAF2_8A55_E259_41C1_65EB8D9BB095",
            "areas": [
             {
              "click": "this.showPopupPanoramaOverlay(this.popup_E1075E0B_8A55_25CF_41CD_04B8AB395385, {'rollOverIconHeight':20,'pressedBorderColor':'#000000','borderColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'iconColor':'#000000','rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'paddingBottom':5,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'paddingRight':5,'iconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','iconHeight':20,'rollOverBorderColor':'#000000','pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_E05B4D55_8A5F_E65B_41DA_48C2859BA282, null, null, null, null, false)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -18.08,
              "pitch": 2.16,
              "hfov": 9.11,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 164,
                 "width": 162,
                 "url": "media/panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD_0_HS_8_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "hideDuration": 500,
            "class": "PopupPanoramaOverlay",
            "yaw": -18.08,
            "popupMaxWidth": "95%",
            "id": "popup_E1075E0B_8A55_25CF_41CD_04B8AB395385",
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "rotationZ": 0,
            "showDuration": 500,
            "hfov": 9.11,
            "popupMaxHeight": "95%",
            "rotationX": 0,
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "height": 686,
               "width": 1024,
               "url": "media/popup_E1075E0B_8A55_25CF_41CD_04B8AB395385_0_3.jpeg"
              }
             ]
            },
            "rotationY": 0,
            "pitch": 2.16
           }
          ],
          "thumbnailUrl": "media/panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 2001,
             "width": 4002,
             "url": "media/panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD.jpeg"
            }
           ]
          }
         }
        ],
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "backwardYaw": -117.53,
          "yaw": 47.28,
          "distance": 1,
          "panorama": {
           "cardboardMenu": "this.Menu_FFF0CDBF_8A6F_26C7_41D1_AC1F2ED35CF8",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "inertia": true,
               "class": "TripodCapPanoramaOverlay",
               "rotate": false,
               "id": "panorama_8382C812_8A2D_6DD9_41C4_F41E0664D67A_tcap0",
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "height": 3536,
                  "width": 3536,
                  "url": "media/panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_tcap0.png"
                 }
                ]
               },
               "angle": 0,
               "hfov": 45
              },
              {
               "autoplay": true,
               "id": "overlay_D726A4FB_8BD3_264F_41DB_2B31858E8CF2",
               "roll": -5.45,
               "loop": true,
               "videoVisibleOnStop": false,
               "rotationY": 75.4,
               "pitch": 1.49,
               "rotationX": -5.84,
               "class": "VideoPanoramaOverlay",
               "yaw": -101.42,
               "vfov": 14.12,
               "data": {
                "label": "Video"
               },
               "blending": 0,
               "hfov": 23.93,
               "useHandCursor": true,
               "enabledInCardboard": true,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "height": 1080,
                  "width": 1920,
                  "url": "media/overlay_D726A4FB_8BD3_264F_41DB_2B31858E8CF2_t.png"
                 }
                ]
               },
               "video": {
                "height": 720,
                "mp4Url": "media/video_EBEB6895_8BD5_2EDA_41DA_27F5F0650351.mp4",
                "class": "VideoResource",
                "webmUrl": "media/video_EBEB6895_8BD5_2EDA_41DA_27F5F0650351.webm",
                "width": 1280
               }
              },
              {
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_ED314200_8A35_3DB9_41C6_D0EEF8E72EAA",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD, this.camera_FDE57F71_8A6F_225B_41CB_670FC1F9BBA5); this.mainPlayList.set('selectedIndex', 7)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -117.53,
                 "pitch": -40.63,
                 "hfov": 6.98,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 162,
                    "width": 164,
                    "url": "media/panorama_8382C812_8A2D_6DD9_41C4_F41E0664D67A_0_HS_0_0.png"
                   }
                  ]
                 }
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_E1E2CF64_8A37_2279_41E0_559B48386073",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_83805C50_8A2D_2659_41DF_0936397503B5, this.camera_FD992F8E_8A6F_22C9_41CF_C3C1DC671331); this.mainPlayList.set('selectedIndex', 8)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -94.29,
                 "pitch": -21.8,
                 "hfov": 8.54,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 162,
                    "width": 164,
                    "url": "media/panorama_8382C812_8A2D_6DD9_41C4_F41E0664D67A_0_HS_1_0.png"
                   }
                  ]
                 }
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_E2799D2A_8A34_E7C9_4194_734B18A329FF",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_8386F202_8A2D_1DB9_41DA_65E45490DA65, this.camera_FDF4EF7B_8A6F_224F_41C4_6DB05B858FC8); this.mainPlayList.set('selectedIndex', 9)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -46.59,
                 "pitch": -18.61,
                 "hfov": 8.71,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 162,
                    "width": 164,
                    "url": "media/panorama_8382C812_8A2D_6DD9_41C4_F41E0664D67A_0_HS_2_0.png"
                   }
                  ]
                 }
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_E3B67997_8A35_2EC7_41E1_0FBDBF41DE17",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_839F4535_8A2D_E7DB_41D1_485537003BDE, this.camera_FD863F84_8A6F_22B9_41D1_3525DF05BD1D); this.mainPlayList.set('selectedIndex', 2)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -138.34,
                 "pitch": -23.77,
                 "hfov": 8.41,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 162,
                    "width": 164,
                    "url": "media/panorama_8382C812_8A2D_6DD9_41C4_F41E0664D67A_0_HS_3_0.png"
                   }
                  ]
                 }
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_ECC12B74_8A2F_2259_41CD_CD2CF5471B98",
               "areas": [
                {
                 "click": "this.showPopupPanoramaOverlay(this.popup_EC82D75E_8A2F_6249_41D4_8E68D20EDF60, {'rollOverIconHeight':20,'pressedBorderColor':'#000000','borderColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'iconColor':'#000000','rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'paddingBottom':5,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'paddingRight':5,'iconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','iconHeight':20,'rollOverBorderColor':'#000000','pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_E379BB1B_8A54_E3CF_41BB_81ED0B284841, null, null, null, null, false)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 0.61,
                 "pitch": -0.42,
                 "hfov": 9.11,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 164,
                    "width": 162,
                    "url": "media/panorama_8382C812_8A2D_6DD9_41C4_F41E0664D67A_0_HS_4_0.png"
                   }
                  ]
                 }
                }
               ]
              },
              {
               "hideDuration": 500,
               "class": "PopupPanoramaOverlay",
               "yaw": 0.61,
               "popupMaxWidth": "95%",
               "id": "popup_EC82D75E_8A2F_6249_41D4_8E68D20EDF60",
               "hideEasing": "cubic_out",
               "showEasing": "cubic_in",
               "rotationZ": 0,
               "showDuration": 500,
               "hfov": 9.11,
               "popupMaxHeight": "95%",
               "rotationX": 0,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "height": 683,
                  "width": 1024,
                  "url": "media/popup_EC82D75E_8A2F_6249_41D4_8E68D20EDF60_0_3.jpeg"
                 }
                ]
               },
               "rotationY": 0,
               "pitch": -0.42
              }
             ],
             "thumbnailUrl": "media/panorama_8382C812_8A2D_6DD9_41C4_F41E0664D67A_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_8382C812_8A2D_6DD9_41C4_F41E0664D67A_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 2001,
                "width": 4002,
                "url": "media/panorama_8382C812_8A2D_6DD9_41C4_F41E0664D67A.jpeg"
               }
              ]
             }
            }
           ],
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 47.28,
             "yaw": -117.53,
             "distance": 1,
             "panorama": "this.panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD"
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -58.9,
             "yaw": -46.59,
             "distance": 1,
             "panorama": {
              "cardboardMenu": "this.Menu_FFF0CDBF_8A6F_26C7_41D1_AC1F2ED35CF8",
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "inertia": true,
                  "class": "TripodCapPanoramaOverlay",
                  "rotate": false,
                  "id": "panorama_8386F202_8A2D_1DB9_41DA_65E45490DA65_tcap0",
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "height": 3536,
                     "width": 3536,
                     "url": "media/panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_tcap0.png"
                    }
                   ]
                  },
                  "angle": 0,
                  "hfov": 45
                 },
                 {
                  "autoplay": true,
                  "id": "overlay_D76066E4_8BD5_227A_41D9_D29103DB221E",
                  "roll": 0.72,
                  "loop": true,
                  "videoVisibleOnStop": false,
                  "rotationY": 20.69,
                  "pitch": 1.62,
                  "rotationX": -1.58,
                  "class": "VideoPanoramaOverlay",
                  "yaw": -4.22,
                  "vfov": 16.36,
                  "data": {
                   "label": "Video"
                  },
                  "blending": 0,
                  "hfov": 28.95,
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "height": 1080,
                     "width": 1920,
                     "url": "media/overlay_D76066E4_8BD5_227A_41D9_D29103DB221E_t.png"
                    }
                   ]
                  },
                  "video": {
                   "height": 720,
                   "mp4Url": "media/video_EBEB6895_8BD5_2EDA_41DA_27F5F0650351.mp4",
                   "class": "VideoResource",
                   "webmUrl": "media/video_EBEB6895_8BD5_2EDA_41DA_27F5F0650351.webm",
                   "width": 1280
                  }
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_EE5245AA_8A3D_26C9_41E0_A0894B0613DC",
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_83805C50_8A2D_2659_41DF_0936397503B5, this.camera_FE379E81_8A6F_22BB_41DC_3371DEC52C24); this.mainPlayList.set('selectedIndex', 8)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 0.5,
                    "pitch": -26.66,
                    "hfov": 8.22,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 162,
                       "width": 164,
                       "url": "media/panorama_8386F202_8A2D_1DB9_41DA_65E45490DA65_0_HS_0_0.png"
                      }
                     ]
                    }
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_EC06613D_8A3C_FFCB_41AC_2E6B527259D7",
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD, this.camera_FE2A6E6E_8A6F_2249_41DC_D86DA29FFB83); this.mainPlayList.set('selectedIndex', 7)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -36.42,
                    "pitch": -24.84,
                    "hfov": 8.34,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 162,
                       "width": 164,
                       "url": "media/panorama_8386F202_8A2D_1DB9_41DA_65E45490DA65_0_HS_1_0.png"
                      }
                     ]
                    }
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_EE4B54F9_8A3F_E64B_41DA_3C8062FFE526",
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_8382C812_8A2D_6DD9_41C4_F41E0664D67A, this.camera_FE210E77_8A6F_2246_4177_718579762D47); this.mainPlayList.set('selectedIndex', 10)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -58.9,
                    "pitch": -24.99,
                    "hfov": 8.33,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 162,
                       "width": 164,
                       "url": "media/panorama_8386F202_8A2D_1DB9_41DA_65E45490DA65_0_HS_2_0.png"
                      }
                     ]
                    }
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_EEA73E6C_8A3C_E249_41E0_6416BA9DD865",
                  "areas": [
                   {
                    "click": "this.showPopupPanoramaOverlay(this.popup_EF826DEC_8A3D_6649_41DD_CC80F1F254D2, {'rollOverIconHeight':20,'pressedBorderColor':'#000000','borderColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'iconColor':'#000000','rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'paddingBottom':5,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'paddingRight':5,'iconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','iconHeight':20,'rollOverBorderColor':'#000000','pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_ED6918FC_8A3D_2E49_41E0_36B6AD7A6867, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -108.15,
                    "pitch": -13.33,
                    "hfov": 8.87,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 164,
                       "width": 162,
                       "url": "media/panorama_8386F202_8A2D_1DB9_41DA_65E45490DA65_0_HS_3_0.png"
                      }
                     ]
                    }
                   }
                  ]
                 },
                 {
                  "hideDuration": 500,
                  "class": "PopupPanoramaOverlay",
                  "yaw": -108.15,
                  "popupMaxWidth": "95%",
                  "id": "popup_EF826DEC_8A3D_6649_41DD_CC80F1F254D2",
                  "hideEasing": "cubic_out",
                  "showEasing": "cubic_in",
                  "rotationZ": 0,
                  "showDuration": 500,
                  "hfov": 8.87,
                  "popupMaxHeight": "95%",
                  "rotationX": 0,
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "height": 682,
                     "width": 1024,
                     "url": "media/popup_EF826DEC_8A3D_6649_41DD_CC80F1F254D2_0_3.jpeg"
                    }
                   ]
                  },
                  "rotationY": 0,
                  "pitch": -13.33
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_E292C9FE_8A2D_2E49_41D2_22CD7DCA4F99",
                  "areas": [
                   {
                    "click": "this.showPopupPanoramaOverlay(this.popup_E0591D3B_8A2C_E7CF_41AF_754E477C1516, {'rollOverIconHeight':20,'pressedBorderColor':'#000000','borderColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'iconColor':'#000000','rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'paddingBottom':5,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'paddingRight':5,'iconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','iconHeight':20,'rollOverBorderColor':'#000000','pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_E3786B19_8A54_E3CB_41D0_5A90F148DD6F, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 96.46,
                    "pitch": 8.54,
                    "hfov": 9.01,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 164,
                       "width": 162,
                       "url": "media/panorama_8386F202_8A2D_1DB9_41DA_65E45490DA65_0_HS_4_0.png"
                      }
                     ]
                    }
                   }
                  ]
                 },
                 {
                  "hideDuration": 500,
                  "class": "PopupPanoramaOverlay",
                  "yaw": 96.46,
                  "popupMaxWidth": "95%",
                  "id": "popup_E0591D3B_8A2C_E7CF_41AF_754E477C1516",
                  "hideEasing": "cubic_out",
                  "showEasing": "cubic_in",
                  "rotationZ": 0,
                  "showDuration": 500,
                  "hfov": 9.01,
                  "popupMaxHeight": "95%",
                  "rotationX": 0,
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "height": 683,
                     "width": 1024,
                     "url": "media/popup_E0591D3B_8A2C_E7CF_41AF_754E477C1516_0_3.jpeg"
                    }
                   ]
                  },
                  "rotationY": 0,
                  "pitch": 8.54
                 }
                ],
                "thumbnailUrl": "media/panorama_8386F202_8A2D_1DB9_41DA_65E45490DA65_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 3217,
                   "width": 6434,
                   "url": "media/panorama_8386F202_8A2D_1DB9_41DA_65E45490DA65_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 2001,
                   "width": 4002,
                   "url": "media/panorama_8386F202_8A2D_1DB9_41DA_65E45490DA65.jpeg"
                  }
                 ]
                }
               }
              ],
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -29.12,
                "yaw": -36.42,
                "distance": 1,
                "panorama": "this.panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD"
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -46.59,
                "yaw": -58.9,
                "distance": 1,
                "panorama": "this.panorama_8382C812_8A2D_6DD9_41C4_F41E0664D67A"
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -32.01,
                "yaw": 0.5,
                "distance": 1,
                "panorama": {
                 "cardboardMenu": "this.Menu_FFF0CDBF_8A6F_26C7_41D1_AC1F2ED35CF8",
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "inertia": true,
                     "class": "TripodCapPanoramaOverlay",
                     "rotate": false,
                     "id": "panorama_83805C50_8A2D_2659_41DF_0936397503B5_tcap0",
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "class": "ImageResourceLevel",
                        "height": 3536,
                        "width": 3536,
                        "url": "media/panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_tcap0.png"
                       }
                      ]
                     },
                     "angle": 0,
                     "hfov": 45
                    },
                    {
                     "autoplay": true,
                     "id": "overlay_EBFCCC96_8BDF_26D9_41DA_560740DE3D20",
                     "roll": 1.17,
                     "loop": true,
                     "videoVisibleOnStop": false,
                     "rotationY": -5.64,
                     "pitch": 12.19,
                     "rotationX": -12.09,
                     "class": "VideoPanoramaOverlay",
                     "yaw": 113.86,
                     "vfov": 92.29,
                     "data": {
                      "label": "Video"
                     },
                     "blending": 0,
                     "hfov": 121.26,
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "class": "ImageResourceLevel",
                        "height": 1080,
                        "width": 1920,
                        "url": "media/overlay_EBFCCC96_8BDF_26D9_41DA_560740DE3D20_t.png"
                       }
                      ]
                     },
                     "video": {
                      "height": 720,
                      "mp4Url": "media/video_EBEB6895_8BD5_2EDA_41DA_27F5F0650351.mp4",
                      "class": "VideoResource",
                      "webmUrl": "media/video_EBEB6895_8BD5_2EDA_41DA_27F5F0650351.webm",
                      "width": 1280
                     }
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "id": "overlay_E8048514_8A2D_E7D9_41D7_73029CAE388C",
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_8386F202_8A2D_1DB9_41DA_65E45490DA65, this.camera_FD182F38_8A6F_23C9_41A3_B9B68E63BFED); this.mainPlayList.set('selectedIndex', 9)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "image"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -32.01,
                       "pitch": -26.96,
                       "hfov": 8.19,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 162,
                          "width": 164,
                          "url": "media/panorama_83805C50_8A2D_2659_41DF_0936397503B5_0_HS_0_0.png"
                         }
                        ]
                       }
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "id": "overlay_EE287013_8A2C_FDDF_41DA_FA658EDC6FCB",
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_8382C812_8A2D_6DD9_41C4_F41E0664D67A, this.camera_FD054F2E_8A6F_23C6_41D9_7DC77341971E); this.mainPlayList.set('selectedIndex', 10)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "image"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 21.15,
                       "pitch": -17.54,
                       "hfov": 8.77,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 162,
                          "width": 164,
                          "url": "media/panorama_83805C50_8A2D_2659_41DF_0936397503B5_0_HS_1_0.png"
                         }
                        ]
                       }
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "id": "overlay_E9B16788_8A2F_E2C9_41BC_6FF5BF2C13C9",
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD, this.camera_FD70EF25_8A6F_23FB_4197_02B3C10EE596); this.mainPlayList.set('selectedIndex', 7)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "image"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 31.79,
                       "pitch": -37.9,
                       "hfov": 7.25,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 162,
                          "width": 164,
                          "url": "media/panorama_83805C50_8A2D_2659_41DF_0936397503B5_0_HS_2_0.png"
                         }
                        ]
                       }
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "id": "overlay_E95B31D7_8A2D_3E47_419B_4A1EB462613F",
                     "areas": [
                      {
                       "click": "this.showPopupPanoramaOverlay(this.popup_EB795120_8A2D_7FFA_41E1_3BA914ECE4AB, {'rollOverIconHeight':20,'pressedBorderColor':'#000000','borderColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'iconColor':'#000000','rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'paddingBottom':5,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'paddingRight':5,'iconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','iconHeight':20,'rollOverBorderColor':'#000000','pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_EFD0B6FE_8A33_6249_41D5_BC89A9935A34, null, null, null, null, false)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "image"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -9.87,
                       "pitch": 2.31,
                       "hfov": 9.11,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 164,
                          "width": 162,
                          "url": "media/panorama_83805C50_8A2D_2659_41DF_0936397503B5_0_HS_3_0.png"
                         }
                        ]
                       }
                      }
                     ]
                    },
                    {
                     "hideDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "yaw": -9.87,
                     "popupMaxWidth": "95%",
                     "id": "popup_EB795120_8A2D_7FFA_41E1_3BA914ECE4AB",
                     "hideEasing": "cubic_out",
                     "showEasing": "cubic_in",
                     "rotationZ": 0,
                     "showDuration": 500,
                     "hfov": 9.11,
                     "popupMaxHeight": "95%",
                     "rotationX": 0,
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "class": "ImageResourceLevel",
                        "height": 683,
                        "width": 1024,
                        "url": "media/popup_EB795120_8A2D_7FFA_41E1_3BA914ECE4AB_0_3.jpeg"
                       }
                      ]
                     },
                     "rotationY": 0,
                     "pitch": 2.31
                    }
                   ],
                   "thumbnailUrl": "media/panorama_83805C50_8A2D_2659_41DF_0936397503B5_t.jpg",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "height": 3217,
                      "width": 6434,
                      "url": "media/panorama_83805C50_8A2D_2659_41DF_0936397503B5_hq.jpeg"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "height": 2001,
                      "width": 4002,
                      "url": "media/panorama_83805C50_8A2D_2659_41DF_0936397503B5.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -51.15,
                   "yaw": 31.79,
                   "distance": 1,
                   "panorama": "this.panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD"
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -94.29,
                   "yaw": 21.15,
                   "distance": 1,
                   "panorama": "this.panorama_8382C812_8A2D_6DD9_41C4_F41E0664D67A"
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": 0.5,
                   "yaw": -32.01,
                   "distance": 1,
                   "panorama": "this.panorama_8386F202_8A2D_1DB9_41DA_65E45490DA65"
                  }
                 ],
                 "id": "panorama_83805C50_8A2D_2659_41DF_0936397503B5",
                 "thumbnailUrl": "media/panorama_83805C50_8A2D_2659_41DF_0936397503B5_t.jpg",
                 "vfov": 180,
                 "pitch": 0,
                 "class": "Panorama",
                 "hfovMax": 130,
                 "partial": false,
                 "label": "KITCHEN VIEW2",
                 "hfov": 360,
                 "hfovMin": 60
                }
               }
              ],
              "id": "panorama_8386F202_8A2D_1DB9_41DA_65E45490DA65",
              "audios": [
               {
                "autoplay": true,
                "class": "PanoramaAudio",
                "audio": {
                 "class": "AudioResource",
                 "oggUrl": "media/audio_E4A30036_8A53_1DD9_41C2_A831C1E5CB8C.ogg",
                 "mp3Url": "media/audio_E4A30036_8A53_1DD9_41C2_A831C1E5CB8C.mp3"
                },
                "data": {
                 "label": "Armin Van Buuren - In And Out Of Love (Ian Tosel & Arthur M Remix 2016) (Music Video)"
                },
                "id": "audio_E4A30036_8A53_1DD9_41C2_A831C1E5CB8C"
               }
              ],
              "thumbnailUrl": "media/panorama_8386F202_8A2D_1DB9_41DA_65E45490DA65_t.jpg",
              "vfov": 180,
              "pitch": 0,
              "class": "Panorama",
              "hfovMax": 130,
              "partial": false,
              "label": "KITCHEN VIEW3",
              "hfov": 360,
              "hfovMin": 60
             }
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 94.06,
             "yaw": -138.34,
             "distance": 1,
             "panorama": "this.panorama_839F4535_8A2D_E7DB_41D1_485537003BDE"
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 21.15,
             "yaw": -94.29,
             "distance": 1,
             "panorama": "this.panorama_83805C50_8A2D_2659_41DF_0936397503B5"
            }
           ],
           "id": "panorama_8382C812_8A2D_6DD9_41C4_F41E0664D67A",
           "thumbnailUrl": "media/panorama_8382C812_8A2D_6DD9_41C4_F41E0664D67A_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "class": "Panorama",
           "hfovMax": 130,
           "partial": false,
           "label": "KITCHEN VIEW4",
           "hfov": 360,
           "hfovMin": 60
          }
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 74.47,
          "yaw": 161.05,
          "distance": 1,
          "panorama": "this.panorama_839F4535_8A2D_E7DB_41D1_485537003BDE"
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": -36.42,
          "yaw": -29.12,
          "distance": 1,
          "panorama": "this.panorama_8386F202_8A2D_1DB9_41DA_65E45490DA65"
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 31.79,
          "yaw": -51.15,
          "distance": 1,
          "panorama": "this.panorama_83805C50_8A2D_2659_41DF_0936397503B5"
         }
        ],
        "id": "panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD",
        "thumbnailUrl": "media/panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "class": "Panorama",
        "hfovMax": 130,
        "partial": false,
        "label": "KITCHEN VIEW1",
        "hfov": 360,
        "hfovMin": 60
       }
      },
      {
       "class": "AdjacentPanorama",
       "backwardYaw": -138.34,
       "yaw": 94.06,
       "distance": 1,
       "panorama": "this.panorama_8382C812_8A2D_6DD9_41C4_F41E0664D67A"
      },
      {
       "class": "AdjacentPanorama",
       "backwardYaw": -1.33,
       "yaw": -2.24,
       "distance": 1,
       "panorama": {
        "cardboardMenu": "this.Menu_FFF0CDBF_8A6F_26C7_41D1_AC1F2ED35CF8",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "inertia": true,
            "class": "TripodCapPanoramaOverlay",
            "rotate": false,
            "id": "panorama_8384D5CA_8A2D_2649_41E0_D5B70B185D2F_tcap0",
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "height": 3536,
               "width": 3536,
               "url": "media/panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_tcap0.png"
              }
             ]
            },
            "angle": 0,
            "hfov": 45
           },
           {
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_A4662308_8AD4_E3CA_41D1_6C6A5A47A5A1",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_83889FAB_8A2D_22CF_41B2_082EF277DF51, this.camera_FC4CEFAB_8A6F_22CF_41CA_3DFECE8234B0); this.mainPlayList.set('selectedIndex', 12)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 1.56,
              "pitch": -42.76,
              "hfov": 12.1,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 320,
                 "width": 294,
                 "url": "media/panorama_8384D5CA_8A2D_2649_41E0_D5B70B185D2F_0_HS_0_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_BA28B1BE_8AD3_1EC9_41D9_CB31CBF02EFA",
            "areas": [
             {
              "click": "this.mainPlayList.set('selectedIndex', 13)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 62.77,
              "pitch": -35.92,
              "hfov": 15.56,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 314,
                 "width": 343,
                 "url": "media/panorama_8384D5CA_8A2D_2649_41E0_D5B70B185D2F_0_HS_1_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_CA7DA4A9_8A53_66CB_41D6_1EFF384C572E",
            "areas": [
             {
              "click": "this.showPopupPanoramaOverlay(this.popup_CA9EB4BC_8A53_26CA_41D2_70200CB7ED9B, {'rollOverIconHeight':20,'pressedBorderColor':'#000000','borderColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'iconColor':'#000000','rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'paddingBottom':5,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'paddingRight':5,'iconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','iconHeight':20,'rollOverBorderColor':'#000000','pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_CE5055AF_8A55_26C7_41B4_0CCB9235DAF0, null, null, null, null, false)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -3.19,
              "pitch": 6.42,
              "hfov": 9.06,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 164,
                 "width": 162,
                 "url": "media/panorama_8384D5CA_8A2D_2649_41E0_D5B70B185D2F_0_HS_2_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "hideDuration": 500,
            "class": "PopupPanoramaOverlay",
            "yaw": -3.19,
            "popupMaxWidth": "95%",
            "id": "popup_CA9EB4BC_8A53_26CA_41D2_70200CB7ED9B",
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "rotationZ": 0,
            "showDuration": 500,
            "hfov": 6.09,
            "popupMaxHeight": "95%",
            "rotationX": 0,
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "height": 1024,
               "width": 682,
               "url": "media/popup_CA9EB4BC_8A53_26CA_41D2_70200CB7ED9B_0_3.jpeg"
              }
             ]
            },
            "rotationY": 0,
            "pitch": 6.42
           },
           {
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_C97FD3FB_8A53_224F_41B8_9D1D0ABB5447",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_839F4535_8A2D_E7DB_41D1_485537003BDE, this.camera_FDAB1F97_8A6F_22C7_41C5_EA1C8EA15713); this.mainPlayList.set('selectedIndex', 2)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -1.33,
              "pitch": -17.39,
              "hfov": 8.77,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 162,
                 "width": 164,
                 "url": "media/panorama_8384D5CA_8A2D_2649_41E0_D5B70B185D2F_0_HS_3_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_C81A0D35_8A6D_27DB_41DB_872D450CBC2C",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_8385AD60_8A2F_2679_41CD_50FFC68AE1CD, this.camera_FDBAAFA2_8A6F_22F9_41DB_5A970F296BA6); this.mainPlayList.set('selectedIndex', 17)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -101.43,
              "pitch": -40.94,
              "hfov": 6.94,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 162,
                 "width": 164,
                 "url": "media/panorama_8384D5CA_8A2D_2649_41E0_D5B70B185D2F_0_HS_4_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_C3F91EFB_8A6F_624F_41D1_DDAB3E52A39C",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_838A8342_8A2F_23B9_41D0_DF825DDC485F, this.camera_FC5C5FB5_8A6F_22DB_41DA_27D30DB561DE); this.mainPlayList.set('selectedIndex', 18)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -114.95,
              "pitch": -19.82,
              "hfov": 8.65,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 162,
                 "width": 164,
                 "url": "media/panorama_8384D5CA_8A2D_2649_41E0_D5B70B185D2F_0_HS_5_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_CC7E424E_8A73_6249_41B0_E07447666C3B",
            "areas": [
             {
              "click": "this.showPopupPanoramaOverlay(this.popup_C2DCCCD2_8A73_2659_41DB_1B5649A29EA9, {'rollOverIconHeight':20,'pressedBorderColor':'#000000','borderColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'iconColor':'#000000','rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'paddingBottom':5,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'paddingRight':5,'iconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','iconHeight':20,'rollOverBorderColor':'#000000','pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_C3AD3819_8A7D_2DCB_41DF_5DC1C437583A, null, null, null, null, false)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -102.08,
              "pitch": 0.8,
              "hfov": 9.11,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 164,
                 "width": 162,
                 "url": "media/panorama_8384D5CA_8A2D_2649_41E0_D5B70B185D2F_0_HS_6_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "hideDuration": 500,
            "class": "PopupPanoramaOverlay",
            "yaw": -102.08,
            "popupMaxWidth": "95%",
            "id": "popup_C2DCCCD2_8A73_2659_41DB_1B5649A29EA9",
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "rotationZ": 0,
            "showDuration": 500,
            "hfov": 9.11,
            "popupMaxHeight": "95%",
            "rotationX": 0,
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "height": 682,
               "width": 1024,
               "url": "media/popup_C2DCCCD2_8A73_2659_41DB_1B5649A29EA9_0_3.jpeg"
              }
             ]
            },
            "rotationY": 0,
            "pitch": 0.8
           }
          ],
          "thumbnailUrl": "media/panorama_8384D5CA_8A2D_2649_41E0_D5B70B185D2F_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_8384D5CA_8A2D_2649_41E0_D5B70B185D2F_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 2001,
             "width": 4002,
             "url": "media/panorama_8384D5CA_8A2D_2649_41E0_D5B70B185D2F.jpeg"
            }
           ]
          }
         }
        ],
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "backwardYaw": -2.24,
          "yaw": -1.33,
          "distance": 1,
          "panorama": "this.panorama_839F4535_8A2D_E7DB_41D1_485537003BDE"
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": -113.58,
          "yaw": -101.43,
          "distance": 1,
          "panorama": {
           "cardboardMenu": "this.Menu_FFF0CDBF_8A6F_26C7_41D1_AC1F2ED35CF8",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "inertia": true,
               "class": "TripodCapPanoramaOverlay",
               "rotate": false,
               "id": "panorama_8385AD60_8A2F_2679_41CD_50FFC68AE1CD_tcap0",
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "height": 3536,
                  "width": 3536,
                  "url": "media/panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_tcap0.png"
                 }
                ]
               },
               "angle": 0,
               "hfov": 45
              },
              {
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_CE31F178_8A73_1E49_41D1_E36D5DB71B6E",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_8384D5CA_8A2D_2649_41E0_D5B70B185D2F, this.camera_FE571E1F_8A6F_25C7_41DC_1C5512476891); this.mainPlayList.set('selectedIndex', 16)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -113.58,
                 "pitch": -46.41,
                 "hfov": 6.34,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 162,
                    "width": 164,
                    "url": "media/panorama_8385AD60_8A2F_2679_41CD_50FFC68AE1CD_0_HS_0_0.png"
                   }
                  ]
                 }
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_C95A4C58_8A74_E64A_41DC_DAEFC69ADB73",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_838A8342_8A2F_23B9_41D0_DF825DDC485F, this.camera_FE6FCE29_8A6F_25CB_41DF_ED76F356CBD2); this.mainPlayList.set('selectedIndex', 18)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 17.36,
                 "pitch": -36.08,
                 "hfov": 7.43,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 162,
                    "width": 164,
                    "url": "media/panorama_8385AD60_8A2F_2679_41CD_50FFC68AE1CD_0_HS_1_0.png"
                   }
                  ]
                 }
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_CDFD67AD_8A75_22CA_41D6_E0D019F28F2A",
               "areas": [
                {
                 "click": "this.mainPlayList.set('selectedIndex', 12)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -128.92,
                 "pitch": -28.94,
                 "hfov": 8.05,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 162,
                    "width": 164,
                    "url": "media/panorama_8385AD60_8A2F_2679_41CD_50FFC68AE1CD_0_HS_2_0.png"
                   }
                  ]
                 }
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_8385AD60_8A2F_2679_41CD_50FFC68AE1CD_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_8385AD60_8A2F_2679_41CD_50FFC68AE1CD_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 2001,
                "width": 4002,
                "url": "media/panorama_8385AD60_8A2F_2679_41CD_50FFC68AE1CD.jpeg"
               }
              ]
             }
            }
           ],
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -101.43,
             "yaw": -113.58,
             "distance": 1,
             "panorama": "this.panorama_8384D5CA_8A2D_2649_41E0_D5B70B185D2F"
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -78.8,
             "yaw": 17.36,
             "distance": 1,
             "panorama": {
              "cardboardMenu": "this.Menu_FFF0CDBF_8A6F_26C7_41D1_AC1F2ED35CF8",
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "inertia": true,
                  "class": "TripodCapPanoramaOverlay",
                  "rotate": false,
                  "id": "panorama_838A8342_8A2F_23B9_41D0_DF825DDC485F_tcap0",
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "height": 3536,
                     "width": 3536,
                     "url": "media/panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_tcap0.png"
                    }
                   ]
                  },
                  "angle": 0,
                  "hfov": 45
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_CD39B1DC_8A7D_1E4A_41D3_5B28B8E2675C",
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_8385AD60_8A2F_2679_41CD_50FFC68AE1CD, this.camera_FEFE8EB2_8A6F_22D9_4199_189E0E0907E0); this.mainPlayList.set('selectedIndex', 17)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -78.8,
                    "pitch": -33.95,
                    "hfov": 7.63,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 162,
                       "width": 164,
                       "url": "media/panorama_838A8342_8A2F_23B9_41D0_DF825DDC485F_0_HS_0_0.png"
                      }
                     ]
                    }
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_C1DAC387_8A7C_E2C7_41E1_019AAAE1C1F0",
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_8384D5CA_8A2D_2649_41E0_D5B70B185D2F, this.camera_FEE86EA8_8A6F_22CA_41D2_BA9BE83A0C2B); this.mainPlayList.set('selectedIndex', 16)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -51.61,
                    "pitch": -27.72,
                    "hfov": 8.14,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 162,
                       "width": 164,
                       "url": "media/panorama_838A8342_8A2F_23B9_41D0_DF825DDC485F_0_HS_1_0.png"
                      }
                     ]
                    }
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_C0A0ED2D_8A73_E7CB_419B_AF70D09349C5",
                  "areas": [
                   {
                    "click": "this.showPopupPanoramaOverlay(this.popup_C092AD6D_8A73_264B_41DE_49400093B392, {'rollOverIconHeight':20,'pressedBorderColor':'#000000','borderColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'iconColor':'#000000','rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'paddingBottom':5,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'paddingRight':5,'iconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','iconHeight':20,'rollOverBorderColor':'#000000','pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_C0442A75_8A75_225B_41E0_0D2B3FBCADD9, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -18.23,
                    "pitch": 11.43,
                    "hfov": 8.93,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 164,
                       "width": 162,
                       "url": "media/panorama_838A8342_8A2F_23B9_41D0_DF825DDC485F_0_HS_2_0.png"
                      }
                     ]
                    }
                   }
                  ]
                 },
                 {
                  "hideDuration": 500,
                  "class": "PopupPanoramaOverlay",
                  "yaw": -18.23,
                  "popupMaxWidth": "95%",
                  "id": "popup_C092AD6D_8A73_264B_41DE_49400093B392",
                  "hideEasing": "cubic_out",
                  "showEasing": "cubic_in",
                  "rotationZ": 0,
                  "showDuration": 500,
                  "hfov": 8.93,
                  "popupMaxHeight": "95%",
                  "rotationX": 0,
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "height": 682,
                     "width": 1023,
                     "url": "media/popup_C092AD6D_8A73_264B_41DE_49400093B392_0_3.jpeg"
                    }
                   ]
                  },
                  "rotationY": 0,
                  "pitch": 11.43
                 }
                ],
                "thumbnailUrl": "media/panorama_838A8342_8A2F_23B9_41D0_DF825DDC485F_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 3217,
                   "width": 6434,
                   "url": "media/panorama_838A8342_8A2F_23B9_41D0_DF825DDC485F_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 2001,
                   "width": 4002,
                   "url": "media/panorama_838A8342_8A2F_23B9_41D0_DF825DDC485F.jpeg"
                  }
                 ]
                }
               }
              ],
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -114.95,
                "yaw": -51.61,
                "distance": 1,
                "panorama": "this.panorama_8384D5CA_8A2D_2649_41E0_D5B70B185D2F"
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 17.36,
                "yaw": -78.8,
                "distance": 1,
                "panorama": "this.panorama_8385AD60_8A2F_2679_41CD_50FFC68AE1CD"
               }
              ],
              "id": "panorama_838A8342_8A2F_23B9_41D0_DF825DDC485F",
              "thumbnailUrl": "media/panorama_838A8342_8A2F_23B9_41D0_DF825DDC485F_t.jpg",
              "vfov": 180,
              "pitch": 0,
              "class": "Panorama",
              "hfovMax": 130,
              "partial": false,
              "label": "BEDROOM3 (B)",
              "hfov": 360,
              "hfovMin": 60
             }
            }
           ],
           "id": "panorama_8385AD60_8A2F_2679_41CD_50FFC68AE1CD",
           "thumbnailUrl": "media/panorama_8385AD60_8A2F_2679_41CD_50FFC68AE1CD_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "class": "Panorama",
           "hfovMax": 130,
           "partial": false,
           "label": "BEDROOM3 (A)",
           "hfov": 360,
           "hfovMin": 60
          }
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 97.63,
          "yaw": 1.56,
          "distance": 1,
          "panorama": {
           "cardboardMenu": "this.Menu_FFF0CDBF_8A6F_26C7_41D1_AC1F2ED35CF8",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "inertia": true,
               "class": "TripodCapPanoramaOverlay",
               "rotate": false,
               "id": "panorama_83889FAB_8A2D_22CF_41B2_082EF277DF51_tcap0",
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "height": 3536,
                  "width": 3536,
                  "url": "media/panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_tcap0.png"
                 }
                ]
               },
               "angle": 0,
               "hfov": 45
              },
              {
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_A1C554A8_8AED_E6C9_41B0_0FA83ECCEC1F",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_839F4535_8A2D_E7DB_41D1_485537003BDE, this.camera_B01550D7_8A35_1E47_41AC_5CC4594F4A27); this.mainPlayList.set('selectedIndex', 2)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -88.97,
                 "pitch": -26.96,
                 "hfov": 13.61,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 206,
                    "width": 272,
                    "url": "media/panorama_83889FAB_8A2D_22CF_41B2_082EF277DF51_0_HS_0_0.png"
                   }
                  ]
                 }
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_A1048827_8AED_6DC7_41B4_02BF74DF44B7",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_83855BB3_8A2C_E2DF_41C6_900C022C5F50, this.camera_FECDBE8C_8A6F_22C9_41E0_2C6072A44718); this.mainPlayList.set('selectedIndex', 13)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 9.38,
                 "pitch": -34.48,
                 "hfov": 12.21,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 252,
                    "width": 264,
                    "url": "media/panorama_83889FAB_8A2D_22CF_41B2_082EF277DF51_0_HS_1_0.png"
                   }
                  ]
                 }
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_A7B66577_8AD5_2647_41CA_E8B04C4B37B9",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_8384D5CA_8A2D_2649_41E0_D5B70B185D2F, this.camera_FED40E9F_8A6F_22C7_41DD_5C404C5909BB); this.mainPlayList.set('selectedIndex', 16)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 97.63,
                 "pitch": -40.71,
                 "hfov": 12.84,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 279,
                    "width": 302,
                    "url": "media/panorama_83889FAB_8A2D_22CF_41B2_082EF277DF51_0_HS_2_0.png"
                   }
                  ]
                 }
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_B2735793_8A37_22DF_41C0_C2A021DFBEC8",
               "areas": [
                {
                 "click": "this.showPopupPanoramaOverlay(this.popup_B3995E67_8A37_6247_41C9_8D27BAEC7D75, {'rollOverIconHeight':20,'pressedBorderColor':'#000000','borderColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'iconColor':'#000000','rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'paddingBottom':5,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'paddingRight':5,'iconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','iconHeight':20,'rollOverBorderColor':'#000000','pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_B0FAF033_8A35_1DDF_41C8_704E2B316C58, null, null, null, null, false)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -89.09,
                 "pitch": 7.86,
                 "hfov": 7.07,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 118,
                    "width": 127,
                    "url": "media/panorama_83889FAB_8A2D_22CF_41B2_082EF277DF51_0_HS_4_0.png"
                   }
                  ]
                 }
                }
               ]
              },
              {
               "hideDuration": 500,
               "class": "PopupPanoramaOverlay",
               "yaw": -89.09,
               "popupMaxWidth": "95%",
               "id": "popup_B3995E67_8A37_6247_41C9_8D27BAEC7D75",
               "hideEasing": "cubic_out",
               "showEasing": "cubic_in",
               "rotationZ": 0,
               "showDuration": 500,
               "hfov": 4.37,
               "popupMaxHeight": "95%",
               "rotationX": 0,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "height": 1024,
                  "width": 682,
                  "url": "media/popup_B3995E67_8A37_6247_41C9_8D27BAEC7D75_0_3.jpeg"
                 }
                ]
               },
               "rotationY": 0,
               "pitch": 7.86
              },
              {
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_B1888F08_8A2C_E3C9_41DB_2C8215ECC205",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_839F4535_8A2D_E7DB_41D1_485537003BDE, this.camera_FEC1FE95_8A6F_22DB_41CF_2C9583FF0A1C); this.mainPlayList.set('selectedIndex', 2)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -88.9,
                 "pitch": -15.49,
                 "hfov": 7.54,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 127,
                    "width": 139,
                    "url": "media/panorama_83889FAB_8A2D_22CF_41B2_082EF277DF51_0_HS_5_0.png"
                   }
                  ]
                 }
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_B78D48EF_8A55_2E47_418A_0B81EA15E6FF",
               "areas": [
                {
                 "click": "this.showPopupPanoramaOverlay(this.popup_B4BECEDB_8A55_624F_41CC_96A73CAD97E6, {'rollOverIconHeight':20,'pressedBorderColor':'#000000','borderColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'iconColor':'#000000','rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'paddingBottom':5,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'paddingRight':5,'iconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','iconHeight':20,'rollOverBorderColor':'#000000','pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_B4350AD3_8A57_625F_41C1_BCD0083BD434, null, null, null, null, false)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 6.99,
                 "pitch": -6.19,
                 "hfov": 9.06,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 164,
                    "width": 162,
                    "url": "media/panorama_83889FAB_8A2D_22CF_41B2_082EF277DF51_0_HS_6_0.png"
                   }
                  ]
                 }
                }
               ]
              },
              {
               "hideDuration": 500,
               "class": "PopupPanoramaOverlay",
               "yaw": 6.99,
               "popupMaxWidth": "95%",
               "id": "popup_B4BECEDB_8A55_624F_41CC_96A73CAD97E6",
               "hideEasing": "cubic_out",
               "showEasing": "cubic_in",
               "rotationZ": 0,
               "showDuration": 500,
               "hfov": 9.06,
               "popupMaxHeight": "95%",
               "rotationX": 0,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "height": 683,
                  "width": 1024,
                  "url": "media/popup_B4BECEDB_8A55_624F_41CC_96A73CAD97E6_0_3.jpeg"
                 }
                ]
               },
               "rotationY": 0,
               "pitch": -6.19
              }
             ],
             "thumbnailUrl": "media/panorama_83889FAB_8A2D_22CF_41B2_082EF277DF51_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_83889FAB_8A2D_22CF_41B2_082EF277DF51_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 2001,
                "width": 4002,
                "url": "media/panorama_83889FAB_8A2D_22CF_41B2_082EF277DF51.jpeg"
               }
              ]
             }
            }
           ],
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -34.75,
             "yaw": 9.38,
             "distance": 1,
             "panorama": {
              "cardboardMenu": "this.Menu_FFF0CDBF_8A6F_26C7_41D1_AC1F2ED35CF8",
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "inertia": true,
                  "class": "TripodCapPanoramaOverlay",
                  "rotate": false,
                  "id": "panorama_83855BB3_8A2C_E2DF_41C6_900C022C5F50_tcap0",
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "height": 3536,
                     "width": 3536,
                     "url": "media/panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_tcap0.png"
                    }
                   ]
                  },
                  "angle": 0,
                  "hfov": 45
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_B8AA2214_8AD3_3DD9_41CB_5D7D3C3BDD1A",
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_83889FAB_8A2D_22CF_41B2_082EF277DF51, this.camera_FDD5FF68_8A6F_2249_41A2_72BD2EB6305E); this.mainPlayList.set('selectedIndex', 12)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -34.75,
                    "pitch": -30.68,
                    "hfov": 17.05,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 344,
                       "width": 354,
                       "url": "media/panorama_83855BB3_8A2C_E2DF_41C6_900C022C5F50_0_HS_0_0.png"
                      }
                     ]
                    }
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_B8B9BE49_8A2D_E24B_41D4_0B147B8E165B",
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_8385719A_8A2C_FEC9_41A5_273B2DC01DC7, this.camera_FDC39F5E_8A6F_2249_41CD_CD0D7CC4FC66); this.mainPlayList.set('selectedIndex', 14)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -92.39,
                    "pitch": -42,
                    "hfov": 14.62,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 342,
                       "width": 351,
                       "url": "media/panorama_83855BB3_8A2C_E2DF_41C6_900C022C5F50_0_HS_1_0.png"
                      }
                     ]
                    }
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_B9340CE0_8A2C_E67A_41D2_C33AFE646E89",
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_8384C778_8A2C_E24A_41DA_263117DE3AF7, this.camera_FD303F55_8A6F_225B_41D8_D118E0DE1ED6); this.mainPlayList.set('selectedIndex', 15)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 127.63,
                    "pitch": -43.82,
                    "hfov": 12.99,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 347,
                       "width": 321,
                       "url": "media/panorama_83855BB3_8A2C_E2DF_41C6_900C022C5F50_0_HS_2_0.png"
                      }
                     ]
                    }
                   }
                  ]
                 }
                ],
                "thumbnailUrl": "media/panorama_83855BB3_8A2C_E2DF_41C6_900C022C5F50_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 3217,
                   "width": 6434,
                   "url": "media/panorama_83855BB3_8A2C_E2DF_41C6_900C022C5F50_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 2001,
                   "width": 4002,
                   "url": "media/panorama_83855BB3_8A2C_E2DF_41C6_900C022C5F50.jpeg"
                  }
                 ]
                }
               }
              ],
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -30.34,
                "yaw": 127.63,
                "distance": 1,
                "panorama": {
                 "cardboardMenu": "this.Menu_FFF0CDBF_8A6F_26C7_41D1_AC1F2ED35CF8",
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "inertia": true,
                     "class": "TripodCapPanoramaOverlay",
                     "rotate": false,
                     "id": "panorama_8384C778_8A2C_E24A_41DA_263117DE3AF7_tcap0",
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "class": "ImageResourceLevel",
                        "height": 3536,
                        "width": 3536,
                        "url": "media/panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_tcap0.png"
                       }
                      ]
                     },
                     "angle": 0,
                     "hfov": 45
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "id": "overlay_BC132349_8A3D_624B_41E0_193AEB7B3E53",
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_83855BB3_8A2C_E2DF_41C6_900C022C5F50, this.camera_FD3EFF4B_8A6F_224F_41D6_0A5B28396E10); this.mainPlayList.set('selectedIndex', 13)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "image"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -30.34,
                       "pitch": -54.08,
                       "hfov": 9.67,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 295,
                          "width": 294,
                          "url": "media/panorama_8384C778_8A2C_E24A_41DA_263117DE3AF7_0_HS_0_0.png"
                         }
                        ]
                       }
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "id": "overlay_B299CC52_8A3F_6659_41A6_1EC7195A32F3",
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_8385719A_8A2C_FEC9_41A5_273B2DC01DC7, this.camera_FD2CFF42_8A6F_23B9_41CE_1157835EE9CD); this.mainPlayList.set('selectedIndex', 14)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "image"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -39.76,
                       "pitch": -28.25,
                       "hfov": 15.06,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 236,
                          "width": 305,
                          "url": "media/panorama_8384C778_8A2C_E24A_41DA_263117DE3AF7_0_HS_1_0.png"
                         }
                        ]
                       }
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "id": "overlay_B291CB6E_8A3D_6249_41DC_8B0C13AD191F",
                     "areas": [
                      {
                       "click": "this.mainPlayList.set('selectedIndex', 12)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "image"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -3.83,
                       "pitch": -27.49,
                       "hfov": 12.33,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 252,
                          "width": 248,
                          "url": "media/panorama_8384C778_8A2C_E24A_41DA_263117DE3AF7_0_HS_2_0.png"
                         }
                        ]
                       }
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "id": "overlay_B4494888_8A53_2EC9_41DF_F08FEEBA7FAC",
                     "areas": [
                      {
                       "click": "this.showPopupPanoramaOverlay(this.popup_B4EC8F9E_8A53_62C9_41CA_8941F1928D82, {'rollOverIconHeight':20,'pressedBorderColor':'#000000','borderColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'iconColor':'#000000','rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'paddingBottom':5,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'paddingRight':5,'iconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','iconHeight':20,'rollOverBorderColor':'#000000','pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_CAB7CAEE_8A53_6249_41B5_08055F37B1C7, null, null, null, null, false)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "image"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -20.66,
                       "pitch": -3.76,
                       "hfov": 9.09,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 164,
                          "width": 162,
                          "url": "media/panorama_8384C778_8A2C_E24A_41DA_263117DE3AF7_0_HS_3_0.png"
                         }
                        ]
                       }
                      }
                     ]
                    },
                    {
                     "hideDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "yaw": -20.66,
                     "popupMaxWidth": "95%",
                     "id": "popup_B4EC8F9E_8A53_62C9_41CA_8941F1928D82",
                     "hideEasing": "cubic_out",
                     "showEasing": "cubic_in",
                     "rotationZ": 0,
                     "showDuration": 500,
                     "hfov": 9.09,
                     "popupMaxHeight": "95%",
                     "rotationX": 0,
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "class": "ImageResourceLevel",
                        "height": 682,
                        "width": 1024,
                        "url": "media/popup_B4EC8F9E_8A53_62C9_41CA_8941F1928D82_0_3.jpeg"
                       }
                      ]
                     },
                     "rotationY": 0,
                     "pitch": -3.76
                    }
                   ],
                   "thumbnailUrl": "media/panorama_8384C778_8A2C_E24A_41DA_263117DE3AF7_t.jpg",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "height": 3217,
                      "width": 6434,
                      "url": "media/panorama_8384C778_8A2C_E24A_41DA_263117DE3AF7_hq.jpeg"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "height": 2001,
                      "width": 4002,
                      "url": "media/panorama_8384C778_8A2C_E24A_41DA_263117DE3AF7.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": 11.96,
                   "yaw": -39.76,
                   "distance": 1,
                   "panorama": {
                    "cardboardMenu": "this.Menu_FFF0CDBF_8A6F_26C7_41D1_AC1F2ED35CF8",
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "overlays": [
                       {
                        "inertia": true,
                        "class": "TripodCapPanoramaOverlay",
                        "rotate": false,
                        "id": "panorama_8385719A_8A2C_FEC9_41A5_273B2DC01DC7_tcap0",
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "class": "ImageResourceLevel",
                           "height": 3536,
                           "width": 3536,
                           "url": "media/panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_tcap0.png"
                          }
                         ]
                        },
                        "angle": 0,
                        "hfov": 45
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "id": "overlay_BF3CF99A_8A35_2EC9_41BC_D7218E4FA431",
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_83855BB3_8A2C_E2DF_41C6_900C022C5F50, this.camera_FFBB1DF7_8A6F_2647_41DB_E4CDC6CBF7B3); this.mainPlayList.set('selectedIndex', 13)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "image"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -27.23,
                          "pitch": -31.29,
                          "hfov": 15.25,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 312,
                             "width": 319,
                             "url": "media/panorama_8385719A_8A2C_FEC9_41A5_273B2DC01DC7_0_HS_0_0.png"
                            }
                           ]
                          }
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "id": "overlay_BE52A3B7_8A37_22C7_41D7_988794FFAD57",
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_8384C778_8A2C_E24A_41DA_263117DE3AF7, this.camera_FFA38DEC_8A6F_2649_41E0_DDC59009D496); this.mainPlayList.set('selectedIndex', 15)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "image"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 11.96,
                          "pitch": -20.58,
                          "hfov": 16.14,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 309,
                             "width": 308,
                             "url": "media/panorama_8385719A_8A2C_FEC9_41A5_273B2DC01DC7_0_HS_1_0.png"
                            }
                           ]
                          }
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "id": "overlay_BF83C09D_8A35_3ECA_41D7_4AE4710631C8",
                        "areas": [
                         {
                          "click": "this.mainPlayList.set('selectedIndex', 12)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "image"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -67.18,
                          "pitch": -31.14,
                          "hfov": 14.5,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 290,
                             "width": 302,
                             "url": "media/panorama_8385719A_8A2C_FEC9_41A5_273B2DC01DC7_0_HS_2_0.png"
                            }
                           ]
                          }
                         }
                        ]
                       }
                      ],
                      "thumbnailUrl": "media/panorama_8385719A_8A2C_FEC9_41A5_273B2DC01DC7_t.jpg",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "height": 3217,
                         "width": 6434,
                         "url": "media/panorama_8385719A_8A2C_FEC9_41A5_273B2DC01DC7_hq.jpeg"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "height": 2001,
                         "width": 4002,
                         "url": "media/panorama_8385719A_8A2C_FEC9_41A5_273B2DC01DC7.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": -39.76,
                      "yaw": 11.96,
                      "distance": 1,
                      "panorama": "this.panorama_8384C778_8A2C_E24A_41DA_263117DE3AF7"
                     },
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": -92.39,
                      "yaw": -27.23,
                      "distance": 1,
                      "panorama": "this.panorama_83855BB3_8A2C_E2DF_41C6_900C022C5F50"
                     }
                    ],
                    "id": "panorama_8385719A_8A2C_FEC9_41A5_273B2DC01DC7",
                    "thumbnailUrl": "media/panorama_8385719A_8A2C_FEC9_41A5_273B2DC01DC7_t.jpg",
                    "vfov": 180,
                    "pitch": 0,
                    "class": "Panorama",
                    "hfovMax": 130,
                    "partial": false,
                    "label": "BEDROOM2 (B)",
                    "hfov": 360,
                    "hfovMin": 60
                   }
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": 127.63,
                   "yaw": -30.34,
                   "distance": 1,
                   "panorama": "this.panorama_83855BB3_8A2C_E2DF_41C6_900C022C5F50"
                  }
                 ],
                 "id": "panorama_8384C778_8A2C_E24A_41DA_263117DE3AF7",
                 "thumbnailUrl": "media/panorama_8384C778_8A2C_E24A_41DA_263117DE3AF7_t.jpg",
                 "vfov": 180,
                 "pitch": 0,
                 "class": "Panorama",
                 "hfovMax": 130,
                 "partial": false,
                 "label": "BEDROOM2 (C)",
                 "hfov": 360,
                 "hfovMin": 60
                }
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -27.23,
                "yaw": -92.39,
                "distance": 1,
                "panorama": "this.panorama_8385719A_8A2C_FEC9_41A5_273B2DC01DC7"
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 9.38,
                "yaw": -34.75,
                "distance": 1,
                "panorama": "this.panorama_83889FAB_8A2D_22CF_41B2_082EF277DF51"
               }
              ],
              "id": "panorama_83855BB3_8A2C_E2DF_41C6_900C022C5F50",
              "thumbnailUrl": "media/panorama_83855BB3_8A2C_E2DF_41C6_900C022C5F50_t.jpg",
              "vfov": 180,
              "pitch": 0,
              "class": "Panorama",
              "hfovMax": 130,
              "partial": false,
              "label": "BEDROOM2 (A)",
              "hfov": 360,
              "hfovMin": 60
             }
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -5.58,
             "yaw": -88.9,
             "distance": 1,
             "panorama": "this.panorama_839F4535_8A2D_E7DB_41D1_485537003BDE"
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 1.56,
             "yaw": 97.63,
             "distance": 1,
             "panorama": "this.panorama_8384D5CA_8A2D_2649_41E0_D5B70B185D2F"
            }
           ],
           "id": "panorama_83889FAB_8A2D_22CF_41B2_082EF277DF51",
           "thumbnailUrl": "media/panorama_83889FAB_8A2D_22CF_41B2_082EF277DF51_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "class": "Panorama",
           "hfovMax": 130,
           "partial": false,
           "label": "CORRIDOR(C)",
           "hfov": 360,
           "hfovMin": 60
          }
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": -51.61,
          "yaw": -114.95,
          "distance": 1,
          "panorama": "this.panorama_838A8342_8A2F_23B9_41D0_DF825DDC485F"
         }
        ],
        "id": "panorama_8384D5CA_8A2D_2649_41E0_D5B70B185D2F",
        "thumbnailUrl": "media/panorama_8384D5CA_8A2D_2649_41E0_D5B70B185D2F_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "class": "Panorama",
        "hfovMax": 130,
        "partial": false,
        "label": "CORRIDOR(D)",
        "hfov": 360,
        "hfovMin": 60
       }
      },
      {
       "class": "AdjacentPanorama",
       "backwardYaw": -88.9,
       "yaw": -5.58,
       "distance": 1,
       "panorama": "this.panorama_83889FAB_8A2D_22CF_41B2_082EF277DF51"
      },
      {
       "class": "AdjacentPanorama",
       "backwardYaw": -84.49,
       "yaw": -75.83,
       "distance": 1,
       "panorama": {
        "cardboardMenu": "this.Menu_FFF0CDBF_8A6F_26C7_41D1_AC1F2ED35CF8",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "inertia": true,
            "class": "TripodCapPanoramaOverlay",
            "rotate": false,
            "id": "panorama_8382CDC4_8A2D_66B9_41C2_C9CE0B37553A_tcap0",
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "height": 3536,
               "width": 3536,
               "url": "media/panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_tcap0.png"
              }
             ]
            },
            "angle": 0,
            "hfov": 45
           },
           {
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_914B03A4_8A3D_22F9_41A5_795327799D49",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_839F4535_8A2D_E7DB_41D1_485537003BDE, this.camera_FEF2BEBC_8A6F_22C9_41A1_17A5373194CD); this.mainPlayList.set('selectedIndex', 2)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -84.49,
              "pitch": -32.35,
              "hfov": 15.08,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 333,
                 "width": 319,
                 "url": "media/panorama_8382CDC4_8A2D_66B9_41C2_C9CE0B37553A_0_HS_0_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_9744FB7A_8A34_E249_41C3_FE35C7D70D8D",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_83808ACD_8A2D_E24B_41DE_6D09E3323A39, this.camera_FE9A4ECF_8A6F_2247_41DD_02D6AC485A10); this.mainPlayList.set('selectedIndex', 4)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 18.34,
              "pitch": -40.18,
              "hfov": 16.19,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 363,
                 "width": 378,
                 "url": "media/panorama_8382CDC4_8A2D_66B9_41C2_C9CE0B37553A_0_HS_1_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_AEDF5926_8AED_2FF9_41D9_ED85C1FD82D6",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_838793A4_8A2D_62F9_41C5_AC0F3344EA28, this.camera_FE871EC6_8A6F_22B9_41DF_D47C5CBBF61E); this.mainPlayList.set('selectedIndex', 5)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 1.79,
              "pitch": -20.13,
              "hfov": 14.48,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 255,
                 "width": 275,
                 "url": "media/panorama_8382CDC4_8A2D_66B9_41C2_C9CE0B37553A_0_HS_2_0.png"
                }
               ]
              }
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_8382CDC4_8A2D_66B9_41C2_C9CE0B37553A_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_8382CDC4_8A2D_66B9_41C2_C9CE0B37553A_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 2001,
             "width": 4002,
             "url": "media/panorama_8382CDC4_8A2D_66B9_41C2_C9CE0B37553A.jpeg"
            }
           ]
          }
         }
        ],
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "backwardYaw": -75.83,
          "yaw": -84.49,
          "distance": 1,
          "panorama": "this.panorama_839F4535_8A2D_E7DB_41D1_485537003BDE"
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 56.24,
          "yaw": 1.79,
          "distance": 1,
          "panorama": {
           "cardboardMenu": "this.Menu_FFF0CDBF_8A6F_26C7_41D1_AC1F2ED35CF8",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "inertia": true,
               "class": "TripodCapPanoramaOverlay",
               "rotate": false,
               "id": "panorama_838793A4_8A2D_62F9_41C5_AC0F3344EA28_tcap0",
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "height": 3536,
                  "width": 3536,
                  "url": "media/panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_tcap0.png"
                 }
                ]
               },
               "angle": 0,
               "hfov": 45
              },
              {
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_AE69C39C_8AED_62C9_4149_63D96A0CEBA0",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_83808ACD_8A2D_E24B_41DE_6D09E3323A39, this.camera_FE492E0B_8A6F_25CF_41D1_B402BEAE7A2C); this.mainPlayList.set('selectedIndex', 4)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 18.65,
                 "pitch": -32.58,
                 "hfov": 15.04,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 266,
                    "width": 319,
                    "url": "media/panorama_838793A4_8A2D_62F9_41C5_AC0F3344EA28_0_HS_0_0.png"
                   }
                  ]
                 }
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_AF914B96_8AF3_22D9_41DA_CB43DAB78C90",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_8382CDC4_8A2D_66B9_41C2_C9CE0B37553A, this.camera_FE41CE15_8A6F_25DB_41CB_152F82E88187); this.mainPlayList.set('selectedIndex', 3)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 56.24,
                 "pitch": -26.35,
                 "hfov": 12.59,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 233,
                    "width": 251,
                    "url": "media/panorama_838793A4_8A2D_62F9_41C5_AC0F3344EA28_0_HS_1_0.png"
                   }
                  ]
                 }
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_ADEB2182_8AF3_7EB9_41D1_9DF8EFAB2168",
               "areas": [
                {
                 "click": "this.mainPlayList.set('selectedIndex', 2)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 83.36,
                 "pitch": -25.22,
                 "hfov": 14.23,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 257,
                    "width": 281,
                    "url": "media/panorama_838793A4_8A2D_62F9_41C5_AC0F3344EA28_0_HS_2_0.png"
                   }
                  ]
                 }
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_AC6DD0EA_8AF5_1E49_41E1_4CCA10E08210",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_83869086_8A2D_1EC6_41C2_3ABC2B69B7A5, this.camera_FFB01E01_8A6F_25BB_41BD_8E3594CAA110); this.mainPlayList.set('selectedIndex', 6)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 140.32,
                 "pitch": -33.8,
                 "hfov": 13.07,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 276,
                    "width": 281,
                    "url": "media/panorama_838793A4_8A2D_62F9_41C5_AC0F3344EA28_0_HS_3_0.png"
                   }
                  ]
                 }
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_A2C8565D_8AF4_E24B_41C8_661FA4A70492",
               "areas": [
                {
                 "click": "this.showPopupPanoramaOverlay(this.popup_AD001457_8AF3_6646_41D5_2CEC6991B172, {'rollOverIconHeight':20,'pressedBorderColor':'#000000','borderColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'iconColor':'#000000','rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'paddingBottom':5,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'paddingRight':5,'iconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','iconHeight':20,'rollOverBorderColor':'#000000','pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_A27BEA7A_8AF3_E249_41DA_3B5DCE2CBC37, null, null, null, null, false)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 136.1,
                 "pitch": -1.94,
                 "hfov": 14.88,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 251,
                    "width": 266,
                    "url": "media/panorama_838793A4_8A2D_62F9_41C5_AC0F3344EA28_0_HS_4_0.png"
                   }
                  ]
                 }
                }
               ]
              },
              {
               "hideDuration": 500,
               "class": "PopupPanoramaOverlay",
               "yaw": 136.1,
               "popupMaxWidth": "95%",
               "id": "popup_AD001457_8AF3_6646_41D5_2CEC6991B172",
               "hideEasing": "cubic_out",
               "showEasing": "cubic_in",
               "rotationZ": 0,
               "showDuration": 500,
               "hfov": 9.37,
               "popupMaxHeight": "95%",
               "rotationX": 0,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "height": 1024,
                  "width": 682,
                  "url": "media/popup_AD001457_8AF3_6646_41D5_2CEC6991B172_0_3.jpeg"
                 }
                ]
               },
               "rotationY": 0,
               "pitch": -1.94
              }
             ],
             "thumbnailUrl": "media/panorama_838793A4_8A2D_62F9_41C5_AC0F3344EA28_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_838793A4_8A2D_62F9_41C5_AC0F3344EA28_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 2001,
                "width": 4002,
                "url": "media/panorama_838793A4_8A2D_62F9_41C5_AC0F3344EA28.jpeg"
               }
              ]
             }
            }
           ],
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 139.56,
             "yaw": 140.32,
             "distance": 1,
             "panorama": {
              "cardboardMenu": "this.Menu_FFF0CDBF_8A6F_26C7_41D1_AC1F2ED35CF8",
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "inertia": true,
                  "class": "TripodCapPanoramaOverlay",
                  "rotate": false,
                  "id": "panorama_83869086_8A2D_1EC6_41C2_3ABC2B69B7A5_tcap0",
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "height": 3536,
                     "width": 3536,
                     "url": "media/panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_tcap0.png"
                    }
                   ]
                  },
                  "angle": 0,
                  "hfov": 45
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_A22E19FC_8AFF_EE49_41C9_39B310561678",
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_838793A4_8A2D_62F9_41C5_AC0F3344EA28, this.camera_FEAECED8_8A6F_2249_41D8_766E370D0B8C); this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 139.56,
                    "pitch": -36.61,
                    "hfov": 15.79,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 355,
                       "width": 351,
                       "url": "media/panorama_83869086_8A2D_1EC6_41C2_3ABC2B69B7A5_0_HS_0_0.png"
                      }
                     ]
                    }
                   }
                  ]
                 }
                ],
                "thumbnailUrl": "media/panorama_83869086_8A2D_1EC6_41C2_3ABC2B69B7A5_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 3217,
                   "width": 6434,
                   "url": "media/panorama_83869086_8A2D_1EC6_41C2_3ABC2B69B7A5_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 2001,
                   "width": 4002,
                   "url": "media/panorama_83869086_8A2D_1EC6_41C2_3ABC2B69B7A5.jpeg"
                  }
                 ]
                }
               }
              ],
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 140.32,
                "yaw": 139.56,
                "distance": 1,
                "panorama": "this.panorama_838793A4_8A2D_62F9_41C5_AC0F3344EA28"
               }
              ],
              "id": "panorama_83869086_8A2D_1EC6_41C2_3ABC2B69B7A5",
              "thumbnailUrl": "media/panorama_83869086_8A2D_1EC6_41C2_3ABC2B69B7A5_t.jpg",
              "vfov": 180,
              "pitch": 0,
              "class": "Panorama",
              "hfovMax": 130,
              "partial": false,
              "label": "ENSUITE BATHROOM",
              "hfov": 360,
              "hfovMin": 60
             }
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 101.66,
             "yaw": 18.65,
             "distance": 1,
             "panorama": {
              "cardboardMenu": "this.Menu_FFF0CDBF_8A6F_26C7_41D1_AC1F2ED35CF8",
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "inertia": true,
                  "class": "TripodCapPanoramaOverlay",
                  "rotate": false,
                  "id": "panorama_83808ACD_8A2D_E24B_41DE_6D09E3323A39_tcap0",
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "height": 3536,
                     "width": 3536,
                     "url": "media/panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_tcap0.png"
                    }
                   ]
                  },
                  "angle": 0,
                  "hfov": 45
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_947F0A07_8A2F_2DC7_41C0_1710478BBC8B",
                  "areas": [
                   {
                    "click": "this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 7.94,
                    "pitch": -37.22,
                    "hfov": 13.85,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 361,
                       "width": 310,
                       "url": "media/panorama_83808ACD_8A2D_E24B_41DE_6D09E3323A39_0_HS_0_0.png"
                      }
                     ]
                    }
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_AA289469_8A2D_264B_41D7_F705AE9364FE",
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_8382CDC4_8A2D_66B9_41C2_C9CE0B37553A, this.camera_FC611FC8_8A6F_2249_41B1_81E78391AD16); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -40.21,
                    "pitch": -35.01,
                    "hfov": 14.5,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 309,
                       "width": 316,
                       "url": "media/panorama_83808ACD_8A2D_E24B_41DE_6D09E3323A39_0_HS_1_0.png"
                      }
                     ]
                    }
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_ABF86C52_8AD7_2659_41DA_6DFAE201CD14",
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_838793A4_8A2D_62F9_41C5_AC0F3344EA28, this.camera_FC6FCFBE_8A6F_22C6_41CB_026F80B2C836); this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 101.66,
                    "pitch": -33.11,
                    "hfov": 15.08,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 323,
                       "width": 321,
                       "url": "media/panorama_83808ACD_8A2D_E24B_41DE_6D09E3323A39_0_HS_2_0.png"
                      }
                     ]
                    }
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_AE3D3FBB_8AD3_62CF_41D3_D6984E5416DF",
                  "areas": [
                   {
                    "click": "this.showPopupPanoramaOverlay(this.popup_A902D271_8AD3_225B_41B1_436FF036D6D1, {'rollOverIconHeight':20,'pressedBorderColor':'#000000','borderColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'iconColor':'#000000','rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'paddingBottom':5,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'paddingRight':5,'iconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','iconHeight':20,'rollOverBorderColor':'#000000','pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_ACC5511D_8AD3_3FCA_41D7_03DA7E02E256, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 99.72,
                    "pitch": -4.67,
                    "hfov": 15.59,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 294,
                       "width": 279,
                       "url": "media/panorama_83808ACD_8A2D_E24B_41DE_6D09E3323A39_0_HS_3_0.png"
                      }
                     ]
                    }
                   }
                  ]
                 },
                 {
                  "hideDuration": 500,
                  "class": "PopupPanoramaOverlay",
                  "yaw": 99.72,
                  "popupMaxWidth": "95%",
                  "id": "popup_A902D271_8AD3_225B_41B1_436FF036D6D1",
                  "hideEasing": "cubic_out",
                  "showEasing": "cubic_in",
                  "rotationZ": 0,
                  "showDuration": 500,
                  "hfov": 15.59,
                  "popupMaxHeight": "95%",
                  "rotationX": 0,
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "height": 683,
                     "width": 1024,
                     "url": "media/popup_A902D271_8AD3_225B_41B1_436FF036D6D1_0_3.jpeg"
                    }
                   ]
                  },
                  "rotationY": 0,
                  "pitch": -4.67
                 }
                ],
                "thumbnailUrl": "media/panorama_83808ACD_8A2D_E24B_41DE_6D09E3323A39_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 3217,
                   "width": 6434,
                   "url": "media/panorama_83808ACD_8A2D_E24B_41DE_6D09E3323A39_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 2001,
                   "width": 4002,
                   "url": "media/panorama_83808ACD_8A2D_E24B_41DE_6D09E3323A39.jpeg"
                  }
                 ]
                }
               }
              ],
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 18.65,
                "yaw": 101.66,
                "distance": 1,
                "panorama": "this.panorama_838793A4_8A2D_62F9_41C5_AC0F3344EA28"
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 18.34,
                "yaw": -40.21,
                "distance": 1,
                "panorama": "this.panorama_8382CDC4_8A2D_66B9_41C2_C9CE0B37553A"
               }
              ],
              "id": "panorama_83808ACD_8A2D_E24B_41DE_6D09E3323A39",
              "thumbnailUrl": "media/panorama_83808ACD_8A2D_E24B_41DE_6D09E3323A39_t.jpg",
              "vfov": 180,
              "pitch": 0,
              "class": "Panorama",
              "hfovMax": 130,
              "partial": false,
              "label": "MAIN BEDROOM ENSUITE2",
              "hfov": 360,
              "hfovMin": 60
             }
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 1.79,
             "yaw": 56.24,
             "distance": 1,
             "panorama": "this.panorama_8382CDC4_8A2D_66B9_41C2_C9CE0B37553A"
            }
           ],
           "id": "panorama_838793A4_8A2D_62F9_41C5_AC0F3344EA28",
           "thumbnailUrl": "media/panorama_838793A4_8A2D_62F9_41C5_AC0F3344EA28_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "class": "Panorama",
           "hfovMax": 130,
           "partial": false,
           "label": "MAIN BEDROOM ENSUITE3",
           "hfov": 360,
           "hfovMin": 60
          }
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": -40.21,
          "yaw": 18.34,
          "distance": 1,
          "panorama": "this.panorama_83808ACD_8A2D_E24B_41DE_6D09E3323A39"
         }
        ],
        "id": "panorama_8382CDC4_8A2D_66B9_41C2_C9CE0B37553A",
        "thumbnailUrl": "media/panorama_8382CDC4_8A2D_66B9_41C2_C9CE0B37553A_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "class": "Panorama",
        "hfovMax": 130,
        "partial": false,
        "label": "MAIN BEDROOM ENSUITE1",
        "hfov": 360,
        "hfovMin": 60
       }
      }
     ],
     "id": "panorama_839F4535_8A2D_E7DB_41D1_485537003BDE",
     "thumbnailUrl": "media/panorama_839F4535_8A2D_E7DB_41D1_485537003BDE_t.jpg",
     "vfov": 180,
     "pitch": 0,
     "class": "Panorama",
     "hfovMax": 130,
     "partial": false,
     "label": "CORRIDOR(A)",
     "hfov": 360,
     "hfovMin": 60
    }
   },
   {
    "class": "AdjacentPanorama",
    "backwardYaw": -168.57,
    "yaw": 101.89,
    "distance": 1,
    "panorama": {
     "cardboardMenu": "this.Menu_FFF0CDBF_8A6F_26C7_41D1_AC1F2ED35CF8",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "inertia": true,
         "class": "TripodCapPanoramaOverlay",
         "rotate": false,
         "id": "panorama_8386CF65_8A2D_E27B_41DE_342D3BCFF3EF_tcap0",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 3536,
            "width": 3536,
            "url": "media/panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_tcap0.png"
           }
          ]
         },
         "angle": 0,
         "hfov": 45
        },
        {
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_9F1FF855_8A57_2E5B_41DF_186707ED125A",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD, this.camera_FEA5DEE2_8A6F_2279_41E0_4F723B729035); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -168.57,
           "pitch": -23.32,
           "hfov": 22.11,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 445,
              "width": 430,
              "url": "media/panorama_8386CF65_8A2D_E27B_41DE_342D3BCFF3EF_0_HS_0_0.png"
             }
            ]
           }
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_8386CF65_8A2D_E27B_41DE_342D3BCFF3EF_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_8386CF65_8A2D_E27B_41DE_342D3BCFF3EF_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_8386CF65_8A2D_E27B_41DE_342D3BCFF3EF.jpeg"
         }
        ]
       }
      }
     ],
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 101.89,
       "yaw": -168.57,
       "distance": 1,
       "panorama": "this.panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD"
      }
     ],
     "id": "panorama_8386CF65_8A2D_E27B_41DE_342D3BCFF3EF",
     "thumbnailUrl": "media/panorama_8386CF65_8A2D_E27B_41DE_342D3BCFF3EF_t.jpg",
     "vfov": 180,
     "pitch": 0,
     "class": "Panorama",
     "hfovMax": 130,
     "partial": false,
     "label": "MAIN BATHROOM",
     "hfov": 360,
     "hfovMin": 60
    }
   }
  ],
  "id": "panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD",
  "thumbnailUrl": "media/panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "class": "Panorama",
  "hfovMax": 130,
  "partial": false,
  "label": "MAIN ENTRANCE CORRIDOR",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "mouseControlMode": "drag_rotation",
  "touchControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "gyroscopeEnabled": true,
  "viewerArea": "this.MainViewer",
  "preloadEnabled": false
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_8386CF65_8A2D_E27B_41DE_342D3BCFF3EF",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_8386CF65_8A2D_E27B_41DE_342D3BCFF3EF_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_839F4535_8A2D_E7DB_41D1_485537003BDE",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_839F4535_8A2D_E7DB_41D1_485537003BDE_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_8382CDC4_8A2D_66B9_41C2_C9CE0B37553A",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_8382CDC4_8A2D_66B9_41C2_C9CE0B37553A_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_83808ACD_8A2D_E24B_41DE_6D09E3323A39",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_83808ACD_8A2D_E24B_41DE_6D09E3323A39_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_838793A4_8A2D_62F9_41C5_AC0F3344EA28",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_838793A4_8A2D_62F9_41C5_AC0F3344EA28_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_83869086_8A2D_1EC6_41C2_3ABC2B69B7A5",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_83869086_8A2D_1EC6_41C2_3ABC2B69B7A5_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_83805C50_8A2D_2659_41DF_0936397503B5",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_83805C50_8A2D_2659_41DF_0936397503B5_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_8386F202_8A2D_1DB9_41DA_65E45490DA65",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_8386F202_8A2D_1DB9_41DA_65E45490DA65_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_8382C812_8A2D_6DD9_41C4_F41E0664D67A",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_8382C812_8A2D_6DD9_41C4_F41E0664D67A_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "cardboardMenu": "this.Menu_FFF0CDBF_8A6F_26C7_41D1_AC1F2ED35CF8",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "inertia": true,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false,
      "id": "panorama_83875994_8A2D_2EDA_41CC_15A0D0F49E92_tcap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 3536,
         "width": 3536,
         "url": "media/panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "hfov": 45
     }
    ],
    "thumbnailUrl": "media/panorama_83875994_8A2D_2EDA_41CC_15A0D0F49E92_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_83875994_8A2D_2EDA_41CC_15A0D0F49E92_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_83875994_8A2D_2EDA_41CC_15A0D0F49E92.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_83875994_8A2D_2EDA_41CC_15A0D0F49E92",
  "partial": false,
  "thumbnailUrl": "media/panorama_83875994_8A2D_2EDA_41CC_15A0D0F49E92_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "class": "Panorama",
  "hfovMax": 130,
  "label": "CORRIDOR(B)",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_83875994_8A2D_2EDA_41CC_15A0D0F49E92_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_83889FAB_8A2D_22CF_41B2_082EF277DF51",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_83889FAB_8A2D_22CF_41B2_082EF277DF51_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_83855BB3_8A2C_E2DF_41C6_900C022C5F50",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_83855BB3_8A2C_E2DF_41C6_900C022C5F50_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_8385719A_8A2C_FEC9_41A5_273B2DC01DC7",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_8385719A_8A2C_FEC9_41A5_273B2DC01DC7_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_8384C778_8A2C_E24A_41DA_263117DE3AF7",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_8384C778_8A2C_E24A_41DA_263117DE3AF7_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_8384D5CA_8A2D_2649_41E0_D5B70B185D2F",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_8384D5CA_8A2D_2649_41E0_D5B70B185D2F_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_8385AD60_8A2F_2679_41CD_50FFC68AE1CD",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_8385AD60_8A2F_2679_41CD_50FFC68AE1CD_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_838A8342_8A2F_23B9_41D0_DF825DDC485F",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_838A8342_8A2F_23B9_41D0_DF825DDC485F_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PhotoAlbum",
  "id": "album_80DDF968_8A33_2E49_41D9_11C95F9D409D",
  "label": "Photo Album IMG_0579-CORRIDOR VIEW1",
  "thumbnailUrl": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_t.png",
  "playList": {
   "id": "album_80DDF968_8A33_2E49_41D9_11C95F9D409D_AlbumPlayList",
   "class": "PhotoPlayList",
   "items": [
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.38",
       "class": "PhotoCameraPosition",
       "y": "0.45"
      },
      "duration": 5000,
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "scaleMode": "fit_outside"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "id": "album_80DDF968_8A33_2E49_41D9_11C95F9D409D_1",
      "label": "IMG_0579-CORRIDOR VIEW2",
      "width": 3630,
      "height": 5445,
      "thumbnailUrl": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_1_t.jpg",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_1.jpeg"
        }
       ]
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.35",
       "class": "PhotoCameraPosition",
       "y": "0.48"
      },
      "duration": 5000,
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "scaleMode": "fit_outside"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "id": "album_80DDF968_8A33_2E49_41D9_11C95F9D409D_9",
      "label": "IMG_0492-MASTER BEDROOM1",
      "width": 5466,
      "height": 3644,
      "thumbnailUrl": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_9_t.jpg",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_9.jpeg"
        }
       ]
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.40",
       "class": "PhotoCameraPosition",
       "y": "0.29"
      },
      "duration": 5000,
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "scaleMode": "fit_outside"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "id": "album_80DDF968_8A33_2E49_41D9_11C95F9D409D_7",
      "label": "IMG_0492-MASTER BEDROOM2",
      "width": 5450,
      "height": 3637,
      "thumbnailUrl": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_7_t.jpg",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_7.jpeg"
        }
       ]
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.28",
       "class": "PhotoCameraPosition",
       "y": "0.61"
      },
      "duration": 5000,
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "scaleMode": "fit_outside"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "id": "album_80DDF968_8A33_2E49_41D9_11C95F9D409D_14",
      "label": "IMG_0442-BATHROOM ENSUITE",
      "width": 3643,
      "height": 5463,
      "thumbnailUrl": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_14_t.jpg",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_14.jpeg"
        }
       ]
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.71",
       "class": "PhotoCameraPosition",
       "y": "0.63"
      },
      "duration": 5000,
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "scaleMode": "fit_outside"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "id": "album_80DDF968_8A33_2E49_41D9_11C95F9D409D_2",
      "label": "IMG_0522-KITCHEN SITTING AREA2",
      "width": 5455,
      "height": 3637,
      "thumbnailUrl": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_2_t.jpg",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_2.jpeg"
        }
       ]
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.70",
       "class": "PhotoCameraPosition",
       "y": "0.42"
      },
      "duration": 5000,
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "scaleMode": "fit_outside"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "id": "album_80DDF968_8A33_2E49_41D9_11C95F9D409D_17",
      "label": "IMG_0422-BEDROOM2",
      "width": 5455,
      "height": 3641,
      "thumbnailUrl": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_17_t.jpg",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_17.jpeg"
        }
       ]
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.66",
       "class": "PhotoCameraPosition",
       "y": "0.26"
      },
      "duration": 5000,
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "scaleMode": "fit_outside"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "id": "album_80DDF968_8A33_2E49_41D9_11C95F9D409D_18",
      "label": "IMG_0419-BEDROOM2",
      "width": 5468,
      "height": 3645,
      "thumbnailUrl": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_18_t.jpg",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_18.jpeg"
        }
       ]
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.44",
       "class": "PhotoCameraPosition",
       "y": "0.35"
      },
      "duration": 5000,
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "scaleMode": "fit_outside"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "id": "album_80DDF968_8A33_2E49_41D9_11C95F9D409D_16",
      "label": "IMG_0427-BEDROOM3",
      "width": 5465,
      "height": 3642,
      "thumbnailUrl": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_16_t.jpg",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_16.jpeg"
        }
       ]
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.53",
       "class": "PhotoCameraPosition",
       "y": "0.53"
      },
      "duration": 5000,
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "scaleMode": "fit_outside"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "id": "album_80DDF968_8A33_2E49_41D9_11C95F9D409D_15",
      "label": "IMG_0433-BEDROOM3",
      "width": 5462,
      "height": 3640,
      "thumbnailUrl": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_15_t.jpg",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_15.jpeg"
        }
       ]
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.52",
       "class": "PhotoCameraPosition",
       "y": "0.75"
      },
      "duration": 5000,
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "scaleMode": "fit_outside"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "id": "album_80DDF968_8A33_2E49_41D9_11C95F9D409D_0",
      "label": "IMG_0579-CORRIDOR VIEW1",
      "width": 3632,
      "height": 5449,
      "thumbnailUrl": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_0_t.jpg",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_0.jpeg"
        }
       ]
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.61",
       "class": "PhotoCameraPosition",
       "y": "0.54"
      },
      "duration": 5000,
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "scaleMode": "fit_outside"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "id": "album_80DDF968_8A33_2E49_41D9_11C95F9D409D_11",
      "label": "IMG_0555-KITCHEN UNIT AREA(C)",
      "width": 5406,
      "height": 3626,
      "thumbnailUrl": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_11_t.jpg",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_11.jpeg"
        }
       ]
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.69",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "duration": 5000,
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "scaleMode": "fit_outside"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "id": "album_80DDF968_8A33_2E49_41D9_11C95F9D409D_8",
      "label": "IMG_0522-KITCHEN SITTING AREA1",
      "width": 5454,
      "height": 3641,
      "thumbnailUrl": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_8_t.jpg",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_8.jpeg"
        }
       ]
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.66",
       "class": "PhotoCameraPosition",
       "y": "0.26"
      },
      "duration": 5000,
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "scaleMode": "fit_outside"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "id": "album_80DDF968_8A33_2E49_41D9_11C95F9D409D_10",
      "label": "IMG_0456-KITCHEN UNIT AREA FROM BACK YARD ENTRANCE",
      "width": 5407,
      "height": 3631,
      "thumbnailUrl": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_10_t.jpg",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_10.jpeg"
        }
       ]
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.45",
       "class": "PhotoCameraPosition",
       "y": "0.51"
      },
      "duration": 5000,
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "scaleMode": "fit_outside"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "id": "album_80DDF968_8A33_2E49_41D9_11C95F9D409D_6",
      "label": "IMG_0479-REAR GARDEN VIEW1",
      "width": 5450,
      "height": 3639,
      "thumbnailUrl": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_6_t.jpg",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_6.jpeg"
        }
       ]
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.41",
       "class": "PhotoCameraPosition",
       "y": "0.59"
      },
      "duration": 5000,
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "scaleMode": "fit_outside"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "id": "album_80DDF968_8A33_2E49_41D9_11C95F9D409D_5",
      "label": "IMG_0479-REAR GARDEN VIEW2",
      "width": 5448,
      "height": 3637,
      "thumbnailUrl": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_5_t.jpg",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_5.jpeg"
        }
       ]
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.36",
       "class": "PhotoCameraPosition",
       "y": "0.25"
      },
      "duration": 5000,
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "scaleMode": "fit_outside"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "id": "album_80DDF968_8A33_2E49_41D9_11C95F9D409D_3",
      "label": "IMG_0479-REAR GARDEN VIEW3",
      "width": 5414,
      "audios": [
       {
        "autoplay": true,
        "class": "PhotoAudio",
        "audio": {
         "class": "AudioResource",
         "oggUrl": "media/audio_DEBBAC78_8BEC_E649_41D7_F0FEA1249017.ogg",
         "mp3Url": "media/audio_DEBBAC78_8BEC_E649_41D7_F0FEA1249017.mp3"
        },
        "data": {
         "label": "Armin Van Buuren - In And Out Of Love (Ian Tosel & Arthur M Remix 2016) (Music Video)"
        },
        "id": "audio_DEBBAC78_8BEC_E649_41D7_F0FEA1249017"
       }
      ],
      "height": 3627,
      "thumbnailUrl": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_3_t.jpg",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_80DDF968_8A33_2E49_41D9_11C95F9D409D_3.jpeg"
        }
       ]
      }
     }
    }
   ]
  }
 },
 {
  "id": "MainViewerPhotoAlbumPlayer",
  "class": "PhotoAlbumPlayer",
  "viewerArea": "this.MainViewer"
 },
 "this.album_80DDF968_8A33_2E49_41D9_11C95F9D409D_1",
 "this.album_80DDF968_8A33_2E49_41D9_11C95F9D409D_9",
 "this.album_80DDF968_8A33_2E49_41D9_11C95F9D409D_7",
 "this.album_80DDF968_8A33_2E49_41D9_11C95F9D409D_14",
 "this.album_80DDF968_8A33_2E49_41D9_11C95F9D409D_2",
 "this.album_80DDF968_8A33_2E49_41D9_11C95F9D409D_17",
 "this.album_80DDF968_8A33_2E49_41D9_11C95F9D409D_18",
 "this.album_80DDF968_8A33_2E49_41D9_11C95F9D409D_16",
 "this.album_80DDF968_8A33_2E49_41D9_11C95F9D409D_15",
 "this.album_80DDF968_8A33_2E49_41D9_11C95F9D409D_0",
 "this.album_80DDF968_8A33_2E49_41D9_11C95F9D409D_11",
 "this.album_80DDF968_8A33_2E49_41D9_11C95F9D409D_8",
 "this.album_80DDF968_8A33_2E49_41D9_11C95F9D409D_10",
 "this.album_80DDF968_8A33_2E49_41D9_11C95F9D409D_6",
 "this.album_80DDF968_8A33_2E49_41D9_11C95F9D409D_5",
 "this.album_80DDF968_8A33_2E49_41D9_11C95F9D409D_3",
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD"
   },
   {
    "camera": "this.panorama_8386CF65_8A2D_E27B_41DE_342D3BCFF3EF_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_8386CF65_8A2D_E27B_41DE_342D3BCFF3EF"
   },
   {
    "camera": "this.panorama_839F4535_8A2D_E7DB_41D1_485537003BDE_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_839F4535_8A2D_E7DB_41D1_485537003BDE"
   },
   {
    "camera": "this.panorama_8382CDC4_8A2D_66B9_41C2_C9CE0B37553A_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_8382CDC4_8A2D_66B9_41C2_C9CE0B37553A"
   },
   {
    "camera": "this.panorama_83808ACD_8A2D_E24B_41DE_6D09E3323A39_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_83808ACD_8A2D_E24B_41DE_6D09E3323A39"
   },
   {
    "camera": "this.panorama_838793A4_8A2D_62F9_41C5_AC0F3344EA28_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_838793A4_8A2D_62F9_41C5_AC0F3344EA28"
   },
   {
    "camera": "this.panorama_83869086_8A2D_1EC6_41C2_3ABC2B69B7A5_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_83869086_8A2D_1EC6_41C2_3ABC2B69B7A5"
   },
   {
    "camera": "this.panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD"
   },
   {
    "camera": "this.panorama_83805C50_8A2D_2659_41DF_0936397503B5_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_83805C50_8A2D_2659_41DF_0936397503B5"
   },
   {
    "camera": "this.panorama_8386F202_8A2D_1DB9_41DA_65E45490DA65_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_8386F202_8A2D_1DB9_41DA_65E45490DA65"
   },
   {
    "camera": "this.panorama_8382C812_8A2D_6DD9_41C4_F41E0664D67A_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_8382C812_8A2D_6DD9_41C4_F41E0664D67A"
   },
   {
    "camera": "this.panorama_83875994_8A2D_2EDA_41CC_15A0D0F49E92_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_83875994_8A2D_2EDA_41CC_15A0D0F49E92"
   },
   {
    "camera": "this.panorama_83889FAB_8A2D_22CF_41B2_082EF277DF51_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "media": "this.panorama_83889FAB_8A2D_22CF_41B2_082EF277DF51"
   },
   {
    "camera": "this.panorama_83855BB3_8A2C_E2DF_41C6_900C022C5F50_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "media": "this.panorama_83855BB3_8A2C_E2DF_41C6_900C022C5F50"
   },
   {
    "camera": "this.panorama_8385719A_8A2C_FEC9_41A5_273B2DC01DC7_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "media": "this.panorama_8385719A_8A2C_FEC9_41A5_273B2DC01DC7"
   },
   {
    "camera": "this.panorama_8384C778_8A2C_E24A_41DA_263117DE3AF7_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "media": "this.panorama_8384C778_8A2C_E24A_41DA_263117DE3AF7"
   },
   {
    "camera": "this.panorama_8384D5CA_8A2D_2649_41E0_D5B70B185D2F_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "media": "this.panorama_8384D5CA_8A2D_2649_41E0_D5B70B185D2F"
   },
   {
    "camera": "this.panorama_8385AD60_8A2F_2679_41CD_50FFC68AE1CD_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "media": "this.panorama_8385AD60_8A2F_2679_41CD_50FFC68AE1CD"
   },
   {
    "camera": "this.panorama_838A8342_8A2F_23B9_41D0_DF825DDC485F_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "media": "this.panorama_838A8342_8A2F_23B9_41D0_DF825DDC485F"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 0)",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "end": "this.trigger('tourEnded')",
    "media": "this.album_80DDF968_8A33_2E49_41D9_11C95F9D409D"
   }
  ]
 },
 {
  "id": "ThumbnailList_C4970BF5_8A54_E25B_41DE_1E80716725E2_playlist",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C4970BF5_8A54_E25B_41DE_1E80716725E2_playlist, 0, 1)",
    "media": "this.panorama_838179A9_8A2D_2ECB_41D7_0D6574326BAD"
   },
   {
    "camera": "this.panorama_8386CF65_8A2D_E27B_41DE_342D3BCFF3EF_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C4970BF5_8A54_E25B_41DE_1E80716725E2_playlist, 1, 2)",
    "media": "this.panorama_8386CF65_8A2D_E27B_41DE_342D3BCFF3EF"
   },
   {
    "camera": "this.panorama_839F4535_8A2D_E7DB_41D1_485537003BDE_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C4970BF5_8A54_E25B_41DE_1E80716725E2_playlist, 2, 3)",
    "media": "this.panorama_839F4535_8A2D_E7DB_41D1_485537003BDE"
   },
   {
    "camera": "this.panorama_8382CDC4_8A2D_66B9_41C2_C9CE0B37553A_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C4970BF5_8A54_E25B_41DE_1E80716725E2_playlist, 3, 4)",
    "media": "this.panorama_8382CDC4_8A2D_66B9_41C2_C9CE0B37553A"
   },
   {
    "camera": "this.panorama_83808ACD_8A2D_E24B_41DE_6D09E3323A39_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C4970BF5_8A54_E25B_41DE_1E80716725E2_playlist, 4, 5)",
    "media": "this.panorama_83808ACD_8A2D_E24B_41DE_6D09E3323A39"
   },
   {
    "camera": "this.panorama_838793A4_8A2D_62F9_41C5_AC0F3344EA28_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C4970BF5_8A54_E25B_41DE_1E80716725E2_playlist, 5, 6)",
    "media": "this.panorama_838793A4_8A2D_62F9_41C5_AC0F3344EA28"
   },
   {
    "camera": "this.panorama_83869086_8A2D_1EC6_41C2_3ABC2B69B7A5_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C4970BF5_8A54_E25B_41DE_1E80716725E2_playlist, 6, 7)",
    "media": "this.panorama_83869086_8A2D_1EC6_41C2_3ABC2B69B7A5"
   },
   {
    "camera": "this.panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C4970BF5_8A54_E25B_41DE_1E80716725E2_playlist, 7, 8)",
    "media": "this.panorama_83836678_8A2D_2249_41DB_FA5C0CABC7AD"
   },
   {
    "camera": "this.panorama_83805C50_8A2D_2659_41DF_0936397503B5_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C4970BF5_8A54_E25B_41DE_1E80716725E2_playlist, 8, 9)",
    "media": "this.panorama_83805C50_8A2D_2659_41DF_0936397503B5"
   },
   {
    "camera": "this.panorama_8386F202_8A2D_1DB9_41DA_65E45490DA65_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C4970BF5_8A54_E25B_41DE_1E80716725E2_playlist, 9, 10)",
    "media": "this.panorama_8386F202_8A2D_1DB9_41DA_65E45490DA65"
   },
   {
    "camera": "this.panorama_8382C812_8A2D_6DD9_41C4_F41E0664D67A_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C4970BF5_8A54_E25B_41DE_1E80716725E2_playlist, 10, 11)",
    "media": "this.panorama_8382C812_8A2D_6DD9_41C4_F41E0664D67A"
   },
   {
    "camera": "this.panorama_83875994_8A2D_2EDA_41CC_15A0D0F49E92_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C4970BF5_8A54_E25B_41DE_1E80716725E2_playlist, 11, 12)",
    "media": "this.panorama_83875994_8A2D_2EDA_41CC_15A0D0F49E92"
   },
   {
    "camera": "this.panorama_83889FAB_8A2D_22CF_41B2_082EF277DF51_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C4970BF5_8A54_E25B_41DE_1E80716725E2_playlist, 12, 13)",
    "media": "this.panorama_83889FAB_8A2D_22CF_41B2_082EF277DF51"
   },
   {
    "camera": "this.panorama_83855BB3_8A2C_E2DF_41C6_900C022C5F50_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C4970BF5_8A54_E25B_41DE_1E80716725E2_playlist, 13, 14)",
    "media": "this.panorama_83855BB3_8A2C_E2DF_41C6_900C022C5F50"
   },
   {
    "camera": "this.panorama_8385719A_8A2C_FEC9_41A5_273B2DC01DC7_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C4970BF5_8A54_E25B_41DE_1E80716725E2_playlist, 14, 15)",
    "media": "this.panorama_8385719A_8A2C_FEC9_41A5_273B2DC01DC7"
   },
   {
    "camera": "this.panorama_8384C778_8A2C_E24A_41DA_263117DE3AF7_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C4970BF5_8A54_E25B_41DE_1E80716725E2_playlist, 15, 16)",
    "media": "this.panorama_8384C778_8A2C_E24A_41DA_263117DE3AF7"
   },
   {
    "camera": "this.panorama_8384D5CA_8A2D_2649_41E0_D5B70B185D2F_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C4970BF5_8A54_E25B_41DE_1E80716725E2_playlist, 16, 17)",
    "media": "this.panorama_8384D5CA_8A2D_2649_41E0_D5B70B185D2F"
   },
   {
    "camera": "this.panorama_8385AD60_8A2F_2679_41CD_50FFC68AE1CD_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C4970BF5_8A54_E25B_41DE_1E80716725E2_playlist, 17, 18)",
    "media": "this.panorama_8385AD60_8A2F_2679_41CD_50FFC68AE1CD"
   },
   {
    "camera": "this.panorama_838A8342_8A2F_23B9_41D0_DF825DDC485F_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C4970BF5_8A54_E25B_41DE_1E80716725E2_playlist, 18, 19)",
    "media": "this.panorama_838A8342_8A2F_23B9_41D0_DF825DDC485F"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C4970BF5_8A54_E25B_41DE_1E80716725E2_playlist, 19, 0)",
    "media": "this.album_80DDF968_8A33_2E49_41D9_11C95F9D409D"
   }
  ]
 },
 {
  "class": "Video",
  "video": {
   "height": 720,
   "mp4Url": "media/video_EBEB6895_8BD5_2EDA_41DA_27F5F0650351.mp4",
   "class": "VideoResource",
   "webmUrl": "media/video_EBEB6895_8BD5_2EDA_41DA_27F5F0650351.webm",
   "width": 1280
  },
  "label": "Beach Waves And Sunset",
  "width": 1920,
  "loop": false,
  "id": "video_EBEB6895_8BD5_2EDA_41DA_27F5F0650351",
  "height": 1080,
  "thumbnailUrl": "media/video_EBEB6895_8BD5_2EDA_41DA_27F5F0650351_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "id": "MainViewerVideoPlayer",
  "class": "VideoPlayer",
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer"
 },
 {
  "id": "playList_FFE45DA9_8A6F_26CB_41D6_65A1986444B1",
  "class": "PlayList",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_EBEB6895_8BD5_2EDA_41DA_27F5F0650351",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_FFE45DA9_8A6F_26CB_41D6_65A1986444B1, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_FFE45DA9_8A6F_26CB_41D6_65A1986444B1, 0, this.video_EBEB6895_8BD5_2EDA_41DA_27F5F0650351)"
   }
  ]
 },
 "this.Menu_FFF0CDBF_8A6F_26C7_41D1_AC1F2ED35CF8",
 {
  "id": "ImageResource_C57824D5_8A2D_265B_41D7_E0B3A30025A2",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 3119,
    "width": 3105,
    "url": "media/zoomImage_DAA17542_8A2F_67B9_41DB_B6E8C84E4915_0_0.png"
   },
   {
    "class": "ImageResourceLevel",
    "height": 2048,
    "width": 2038,
    "url": "media/zoomImage_DAA17542_8A2F_67B9_41DB_B6E8C84E4915_0_1.png"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1024,
    "width": 1019,
    "url": "media/zoomImage_DAA17542_8A2F_67B9_41DB_B6E8C84E4915_0_2.png"
   },
   {
    "class": "ImageResourceLevel",
    "height": 512,
    "width": 509,
    "url": "media/zoomImage_DAA17542_8A2F_67B9_41DB_B6E8C84E4915_0_3.png"
   }
  ]
 },
 {
  "id": "FadeInEffect_C57834D5_8A2D_265B_41D2_1B8E2A67A22E",
  "class": "FadeInEffect",
  "easing": "cubic_in",
  "duration": 500
 },
 {
  "id": "FadeOutEffect_C57854D5_8A2D_265B_41D1_945E2F00547E",
  "class": "FadeOutEffect",
  "easing": "cubic_out",
  "duration": 500
 },
 "this.popup_9E0F6178_8A73_7E49_41CD_0B99A50D4B37",
 {
  "id": "ImageResource_999192E8_8A6D_224A_41DA_C7EEA5CCD39C",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 5449,
    "width": 3632,
    "url": "media/popup_9E0F6178_8A73_7E49_41CD_0B99A50D4B37_0_0.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 4096,
    "width": 2730,
    "url": "media/popup_9E0F6178_8A73_7E49_41CD_0B99A50D4B37_0_1.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 2048,
    "width": 1365,
    "url": "media/popup_9E0F6178_8A73_7E49_41CD_0B99A50D4B37_0_2.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1024,
    "width": 682,
    "url": "media/popup_9E0F6178_8A73_7E49_41CD_0B99A50D4B37_0_3.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 512,
    "width": 341,
    "url": "media/popup_9E0F6178_8A73_7E49_41CD_0B99A50D4B37_0_4.jpeg"
   }
  ]
 },
 "this.popup_920A1E06_8A2D_25B9_41DA_78F683B6406D",
 {
  "id": "ImageResource_94033BE2_8A2D_6279_41DC_6A8E8BF45C53",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 3644,
    "width": 5466,
    "url": "media/popup_920A1E06_8A2D_25B9_41DA_78F683B6406D_0_0.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 2730,
    "width": 4095,
    "url": "media/popup_920A1E06_8A2D_25B9_41DA_78F683B6406D_0_1.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1365,
    "width": 2047,
    "url": "media/popup_920A1E06_8A2D_25B9_41DA_78F683B6406D_0_2.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 682,
    "width": 1023,
    "url": "media/popup_920A1E06_8A2D_25B9_41DA_78F683B6406D_0_3.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 341,
    "width": 511,
    "url": "media/popup_920A1E06_8A2D_25B9_41DA_78F683B6406D_0_4.jpeg"
   }
  ]
 },
 "this.popup_9168F7B6_8A37_22C6_41C8_88DB19595E8A",
 {
  "id": "ImageResource_9049CA58_8A35_2249_41D3_F802C129FB1D",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 3637,
    "width": 5450,
    "url": "media/popup_9168F7B6_8A37_22C6_41C8_88DB19595E8A_0_0.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 2733,
    "width": 4096,
    "url": "media/popup_9168F7B6_8A37_22C6_41C8_88DB19595E8A_0_1.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1366,
    "width": 2048,
    "url": "media/popup_9168F7B6_8A37_22C6_41C8_88DB19595E8A_0_2.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 683,
    "width": 1024,
    "url": "media/popup_9168F7B6_8A37_22C6_41C8_88DB19595E8A_0_3.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 341,
    "width": 512,
    "url": "media/popup_9168F7B6_8A37_22C6_41C8_88DB19595E8A_0_4.jpeg"
   }
  ]
 },
 "this.popup_A902D271_8AD3_225B_41B1_436FF036D6D1",
 {
  "id": "ImageResource_ACC5511D_8AD3_3FCA_41D7_03DA7E02E256",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 3637,
    "width": 5450,
    "url": "media/popup_A902D271_8AD3_225B_41B1_436FF036D6D1_0_0.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 2733,
    "width": 4096,
    "url": "media/popup_A902D271_8AD3_225B_41B1_436FF036D6D1_0_1.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1366,
    "width": 2048,
    "url": "media/popup_A902D271_8AD3_225B_41B1_436FF036D6D1_0_2.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 683,
    "width": 1024,
    "url": "media/popup_A902D271_8AD3_225B_41B1_436FF036D6D1_0_3.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 341,
    "width": 512,
    "url": "media/popup_A902D271_8AD3_225B_41B1_436FF036D6D1_0_4.jpeg"
   }
  ]
 },
 "this.popup_AD001457_8AF3_6646_41D5_2CEC6991B172",
 {
  "id": "ImageResource_A27BEA7A_8AF3_E249_41DA_3B5DCE2CBC37",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 5463,
    "width": 3643,
    "url": "media/popup_AD001457_8AF3_6646_41D5_2CEC6991B172_0_0.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 4096,
    "width": 2731,
    "url": "media/popup_AD001457_8AF3_6646_41D5_2CEC6991B172_0_1.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 2048,
    "width": 1365,
    "url": "media/popup_AD001457_8AF3_6646_41D5_2CEC6991B172_0_2.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1024,
    "width": 682,
    "url": "media/popup_AD001457_8AF3_6646_41D5_2CEC6991B172_0_3.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 512,
    "width": 341,
    "url": "media/popup_AD001457_8AF3_6646_41D5_2CEC6991B172_0_4.jpeg"
   }
  ]
 },
 "this.popup_EA48137C_8A37_6249_41DA_5900AD052FAE",
 {
  "id": "ImageResource_EF3C18C9_8A37_6E4B_41CC_79B7629EB08B",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 3626,
    "width": 5406,
    "url": "media/popup_EA48137C_8A37_6249_41DA_5900AD052FAE_0_0.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 2747,
    "width": 4096,
    "url": "media/popup_EA48137C_8A37_6249_41DA_5900AD052FAE_0_1.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1373,
    "width": 2048,
    "url": "media/popup_EA48137C_8A37_6249_41DA_5900AD052FAE_0_2.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 686,
    "width": 1024,
    "url": "media/popup_EA48137C_8A37_6249_41DA_5900AD052FAE_0_3.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 343,
    "width": 512,
    "url": "media/popup_EA48137C_8A37_6249_41DA_5900AD052FAE_0_4.jpeg"
   }
  ]
 },
 "this.popup_E7296DF6_8A57_E659_41D2_B5B09741465C",
 {
  "id": "ImageResource_E05A0D52_8A5F_E659_41C5_6194D5FF905C",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 3637,
    "width": 5448,
    "url": "media/popup_E7296DF6_8A57_E659_41D2_B5B09741465C_0_0.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 2734,
    "width": 4096,
    "url": "media/popup_E7296DF6_8A57_E659_41D2_B5B09741465C_0_1.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1367,
    "width": 2048,
    "url": "media/popup_E7296DF6_8A57_E659_41D2_B5B09741465C_0_2.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 683,
    "width": 1024,
    "url": "media/popup_E7296DF6_8A57_E659_41D2_B5B09741465C_0_3.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 341,
    "width": 512,
    "url": "media/popup_E7296DF6_8A57_E659_41D2_B5B09741465C_0_4.jpeg"
   }
  ]
 },
 "this.popup_E00BFA96_8A54_E2C6_41C7_AB9704405E6B",
 {
  "id": "ImageResource_E05ABD53_8A5F_E65F_41AC_DAE55CB5B9CD",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 3639,
    "width": 5450,
    "url": "media/popup_E00BFA96_8A54_E2C6_41C7_AB9704405E6B_0_0.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 2734,
    "width": 4096,
    "url": "media/popup_E00BFA96_8A54_E2C6_41C7_AB9704405E6B_0_1.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1367,
    "width": 2048,
    "url": "media/popup_E00BFA96_8A54_E2C6_41C7_AB9704405E6B_0_2.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 683,
    "width": 1024,
    "url": "media/popup_E00BFA96_8A54_E2C6_41C7_AB9704405E6B_0_3.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 341,
    "width": 512,
    "url": "media/popup_E00BFA96_8A54_E2C6_41C7_AB9704405E6B_0_4.jpeg"
   }
  ]
 },
 "this.popup_E1075E0B_8A55_25CF_41CD_04B8AB395385",
 {
  "id": "ImageResource_E05B4D55_8A5F_E65B_41DA_48C2859BA282",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 3627,
    "width": 5414,
    "url": "media/popup_E1075E0B_8A55_25CF_41CD_04B8AB395385_0_0.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 2744,
    "width": 4096,
    "url": "media/popup_E1075E0B_8A55_25CF_41CD_04B8AB395385_0_1.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1372,
    "width": 2048,
    "url": "media/popup_E1075E0B_8A55_25CF_41CD_04B8AB395385_0_2.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 686,
    "width": 1024,
    "url": "media/popup_E1075E0B_8A55_25CF_41CD_04B8AB395385_0_3.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 343,
    "width": 512,
    "url": "media/popup_E1075E0B_8A55_25CF_41CD_04B8AB395385_0_4.jpeg"
   }
  ]
 },
 "this.popup_EB795120_8A2D_7FFA_41E1_3BA914ECE4AB",
 {
  "id": "ImageResource_EFD0B6FE_8A33_6249_41D5_BC89A9935A34",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 3641,
    "width": 5454,
    "url": "media/popup_EB795120_8A2D_7FFA_41E1_3BA914ECE4AB_0_0.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 2734,
    "width": 4096,
    "url": "media/popup_EB795120_8A2D_7FFA_41E1_3BA914ECE4AB_0_1.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1367,
    "width": 2048,
    "url": "media/popup_EB795120_8A2D_7FFA_41E1_3BA914ECE4AB_0_2.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 683,
    "width": 1024,
    "url": "media/popup_EB795120_8A2D_7FFA_41E1_3BA914ECE4AB_0_3.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 341,
    "width": 512,
    "url": "media/popup_EB795120_8A2D_7FFA_41E1_3BA914ECE4AB_0_4.jpeg"
   }
  ]
 },
 "this.popup_EF826DEC_8A3D_6649_41DD_CC80F1F254D2",
 {
  "id": "ImageResource_ED6918FC_8A3D_2E49_41E0_36B6AD7A6867",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 3637,
    "width": 5455,
    "url": "media/popup_EF826DEC_8A3D_6649_41DD_CC80F1F254D2_0_0.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 2730,
    "width": 4096,
    "url": "media/popup_EF826DEC_8A3D_6649_41DD_CC80F1F254D2_0_1.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1365,
    "width": 2048,
    "url": "media/popup_EF826DEC_8A3D_6649_41DD_CC80F1F254D2_0_2.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 682,
    "width": 1024,
    "url": "media/popup_EF826DEC_8A3D_6649_41DD_CC80F1F254D2_0_3.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 341,
    "width": 512,
    "url": "media/popup_EF826DEC_8A3D_6649_41DD_CC80F1F254D2_0_4.jpeg"
   }
  ]
 },
 "this.popup_E0591D3B_8A2C_E7CF_41AF_754E477C1516",
 {
  "id": "ImageResource_E3786B19_8A54_E3CB_41D0_5A90F148DD6F",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 3637,
    "width": 5448,
    "url": "media/popup_E0591D3B_8A2C_E7CF_41AF_754E477C1516_0_0.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 2734,
    "width": 4096,
    "url": "media/popup_E0591D3B_8A2C_E7CF_41AF_754E477C1516_0_1.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1367,
    "width": 2048,
    "url": "media/popup_E0591D3B_8A2C_E7CF_41AF_754E477C1516_0_2.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 683,
    "width": 1024,
    "url": "media/popup_E0591D3B_8A2C_E7CF_41AF_754E477C1516_0_3.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 341,
    "width": 512,
    "url": "media/popup_E0591D3B_8A2C_E7CF_41AF_754E477C1516_0_4.jpeg"
   }
  ]
 },
 "this.popup_EC82D75E_8A2F_6249_41D4_8E68D20EDF60",
 {
  "id": "ImageResource_E379BB1B_8A54_E3CF_41BB_81ED0B284841",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 3639,
    "width": 5450,
    "url": "media/popup_EC82D75E_8A2F_6249_41D4_8E68D20EDF60_0_0.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 2734,
    "width": 4096,
    "url": "media/popup_EC82D75E_8A2F_6249_41D4_8E68D20EDF60_0_1.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1367,
    "width": 2048,
    "url": "media/popup_EC82D75E_8A2F_6249_41D4_8E68D20EDF60_0_2.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 683,
    "width": 1024,
    "url": "media/popup_EC82D75E_8A2F_6249_41D4_8E68D20EDF60_0_3.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 341,
    "width": 512,
    "url": "media/popup_EC82D75E_8A2F_6249_41D4_8E68D20EDF60_0_4.jpeg"
   }
  ]
 },
 "this.popup_B3995E67_8A37_6247_41C9_8D27BAEC7D75",
 {
  "id": "ImageResource_B0FAF033_8A35_1DDF_41C8_704E2B316C58",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 5445,
    "width": 3630,
    "url": "media/popup_B3995E67_8A37_6247_41C9_8D27BAEC7D75_0_0.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 4096,
    "width": 2730,
    "url": "media/popup_B3995E67_8A37_6247_41C9_8D27BAEC7D75_0_1.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 2048,
    "width": 1365,
    "url": "media/popup_B3995E67_8A37_6247_41C9_8D27BAEC7D75_0_2.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1024,
    "width": 682,
    "url": "media/popup_B3995E67_8A37_6247_41C9_8D27BAEC7D75_0_3.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 512,
    "width": 341,
    "url": "media/popup_B3995E67_8A37_6247_41C9_8D27BAEC7D75_0_4.jpeg"
   }
  ]
 },
 "this.popup_B4BECEDB_8A55_624F_41CC_96A73CAD97E6",
 {
  "id": "ImageResource_B4350AD3_8A57_625F_41C1_BCD0083BD434",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 3641,
    "width": 5455,
    "url": "media/popup_B4BECEDB_8A55_624F_41CC_96A73CAD97E6_0_0.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 2733,
    "width": 4096,
    "url": "media/popup_B4BECEDB_8A55_624F_41CC_96A73CAD97E6_0_1.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1366,
    "width": 2048,
    "url": "media/popup_B4BECEDB_8A55_624F_41CC_96A73CAD97E6_0_2.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 683,
    "width": 1024,
    "url": "media/popup_B4BECEDB_8A55_624F_41CC_96A73CAD97E6_0_3.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 341,
    "width": 512,
    "url": "media/popup_B4BECEDB_8A55_624F_41CC_96A73CAD97E6_0_4.jpeg"
   }
  ]
 },
 "this.popup_B4EC8F9E_8A53_62C9_41CA_8941F1928D82",
 {
  "id": "ImageResource_CAB7CAEE_8A53_6249_41B5_08055F37B1C7",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 3645,
    "width": 5468,
    "url": "media/popup_B4EC8F9E_8A53_62C9_41CA_8941F1928D82_0_0.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 2730,
    "width": 4096,
    "url": "media/popup_B4EC8F9E_8A53_62C9_41CA_8941F1928D82_0_1.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1365,
    "width": 2048,
    "url": "media/popup_B4EC8F9E_8A53_62C9_41CA_8941F1928D82_0_2.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 682,
    "width": 1024,
    "url": "media/popup_B4EC8F9E_8A53_62C9_41CA_8941F1928D82_0_3.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 341,
    "width": 512,
    "url": "media/popup_B4EC8F9E_8A53_62C9_41CA_8941F1928D82_0_4.jpeg"
   }
  ]
 },
 "this.popup_CA9EB4BC_8A53_26CA_41D2_70200CB7ED9B",
 {
  "id": "ImageResource_CE5055AF_8A55_26C7_41B4_0CCB9235DAF0",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 5445,
    "width": 3630,
    "url": "media/popup_CA9EB4BC_8A53_26CA_41D2_70200CB7ED9B_0_0.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 4096,
    "width": 2730,
    "url": "media/popup_CA9EB4BC_8A53_26CA_41D2_70200CB7ED9B_0_1.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 2048,
    "width": 1365,
    "url": "media/popup_CA9EB4BC_8A53_26CA_41D2_70200CB7ED9B_0_2.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1024,
    "width": 682,
    "url": "media/popup_CA9EB4BC_8A53_26CA_41D2_70200CB7ED9B_0_3.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 512,
    "width": 341,
    "url": "media/popup_CA9EB4BC_8A53_26CA_41D2_70200CB7ED9B_0_4.jpeg"
   }
  ]
 },
 "this.popup_C2DCCCD2_8A73_2659_41DB_1B5649A29EA9",
 {
  "id": "ImageResource_C3AD3819_8A7D_2DCB_41DF_5DC1C437583A",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 3642,
    "width": 5465,
    "url": "media/popup_C2DCCCD2_8A73_2659_41DB_1B5649A29EA9_0_0.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 2729,
    "width": 4096,
    "url": "media/popup_C2DCCCD2_8A73_2659_41DB_1B5649A29EA9_0_1.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1364,
    "width": 2048,
    "url": "media/popup_C2DCCCD2_8A73_2659_41DB_1B5649A29EA9_0_2.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 682,
    "width": 1024,
    "url": "media/popup_C2DCCCD2_8A73_2659_41DB_1B5649A29EA9_0_3.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 341,
    "width": 512,
    "url": "media/popup_C2DCCCD2_8A73_2659_41DB_1B5649A29EA9_0_4.jpeg"
   }
  ]
 },
 "this.popup_C092AD6D_8A73_264B_41DE_49400093B392",
 {
  "id": "ImageResource_C0442A75_8A75_225B_41E0_0D2B3FBCADD9",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 3640,
    "width": 5462,
    "url": "media/popup_C092AD6D_8A73_264B_41DE_49400093B392_0_0.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 2729,
    "width": 4095,
    "url": "media/popup_C092AD6D_8A73_264B_41DE_49400093B392_0_1.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1364,
    "width": 2047,
    "url": "media/popup_C092AD6D_8A73_264B_41DE_49400093B392_0_2.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 682,
    "width": 1023,
    "url": "media/popup_C092AD6D_8A73_264B_41DE_49400093B392_0_3.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 341,
    "width": 511,
    "url": "media/popup_C092AD6D_8A73_264B_41DE_49400093B392_0_4.jpeg"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 140.24,
   "pitch": 0
  },
  "id": "camera_FFA38DEC_8A6F_2649_41E0_DDC59009D496",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 87.61,
   "pitch": 0
  },
  "id": "camera_FFBB1DF7_8A6F_2647_41DB_E4CDC6CBF7B3",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -40.44,
   "pitch": 0
  },
  "id": "camera_FFB01E01_8A6F_25BB_41BD_8E3594CAA110",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -78.34,
   "pitch": 0
  },
  "id": "camera_FE492E0B_8A6F_25CF_41D1_B402BEAE7A2C",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.21,
   "pitch": 0
  },
  "id": "camera_FE41CE15_8A6F_25DB_41CB_152F82E88187",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 78.57,
   "pitch": 0
  },
  "id": "camera_FE571E1F_8A6F_25C7_41DC_1C5512476891",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 101.2,
   "pitch": 0
  },
  "id": "camera_FE6FCE29_8A6F_25CB_41DF_ED76F356CBD2",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.17,
   "pitch": 0
  },
  "id": "camera_FE650E33_8A6F_25DF_41BE_92FF61AC42C3",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 11.43,
   "pitch": 0
  },
  "id": "camera_FE7DEE3D_8A6F_25CB_41AC_C7BA5F43B402",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 62.47,
   "pitch": 0
  },
  "id": "camera_FE73FE46_8A6F_25B9_41D9_5665CEDDE844",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -105.53,
   "pitch": 0
  },
  "id": "camera_FE09CE50_8A6F_225A_41DC_FA333960EE74",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 143.58,
   "pitch": 0
  },
  "id": "camera_FE1E8E5A_8A6F_2249_41D1_D9547658DADA",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -148.21,
   "pitch": 0
  },
  "id": "camera_FE150E64_8A6F_2279_41E0_465D5AB08B8B",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 150.88,
   "pitch": 0
  },
  "id": "camera_FE2A6E6E_8A6F_2249_41DC_D86DA29FFB83",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 133.41,
   "pitch": 0
  },
  "id": "camera_FE210E77_8A6F_2246_4177_718579762D47",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 147.99,
   "pitch": 0
  },
  "id": "camera_FE379E81_8A6F_22BB_41DC_3371DEC52C24",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 145.25,
   "pitch": 0
  },
  "id": "camera_FECDBE8C_8A6F_22C9_41E0_2C6072A44718",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 174.42,
   "pitch": 0
  },
  "id": "camera_FEC1FE95_8A6F_22DB_41CF_2C9583FF0A1C",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.44,
   "pitch": 0
  },
  "id": "camera_FED40E9F_8A6F_22C7_41DD_5C404C5909BB",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 65.05,
   "pitch": 0
  },
  "id": "camera_FEE86EA8_8A6F_22CA_41D2_BA9BE83A0C2B",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -162.64,
   "pitch": 0
  },
  "id": "camera_FEFE8EB2_8A6F_22D9_4199_189E0E0907E0",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 104.17,
   "pitch": 0
  },
  "id": "camera_FEF2BEBC_8A6F_22C9_41A1_17A5373194CD",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -123.76,
   "pitch": 0
  },
  "id": "camera_FE871EC6_8A6F_22B9_41DF_D47C5CBBF61E",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 139.79,
   "pitch": 0
  },
  "id": "camera_FE9A4ECF_8A6F_2247_41DD_02D6AC485A10",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -39.68,
   "pitch": 0
  },
  "id": "camera_FEAECED8_8A6F_2249_41D8_766E370D0B8C",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -78.11,
   "pitch": 0
  },
  "id": "camera_FEA5DEE2_8A6F_2279_41E0_4F723B729035",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.25,
   "pitch": 0
  },
  "id": "camera_FEB63EEB_8A6F_224F_41D7_305B7F1463F9",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -18.95,
   "pitch": 0
  },
  "id": "camera_FD4D5EF5_8A6F_225B_41B4_A23031A7CA92",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 41.66,
   "pitch": 0
  },
  "id": "camera_FD41CEFF_8A6F_2247_41CB_D4CB845C441F",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.67,
   "pitch": 0
  },
  "id": "camera_FD525F08_8A6F_23C9_41C2_08E0A647A008",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 91.1,
   "pitch": 0
  },
  "id": "camera_FD691F12_8A6F_23D9_41C5_50E7B2F595CF",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 95.51,
   "pitch": 0
  },
  "id": "camera_FD7D8F1B_8A6F_23CF_41DA_0DBC7855AD99",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 128.85,
   "pitch": 0
  },
  "id": "camera_FD70EF25_8A6F_23FB_4197_02B3C10EE596",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 85.71,
   "pitch": 0
  },
  "id": "camera_FD054F2E_8A6F_23C6_41D9_7DC77341971E",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.5,
   "pitch": 0
  },
  "id": "camera_FD182F38_8A6F_23C9_41A3_B9B68E63BFED",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -168.04,
   "pitch": 0
  },
  "id": "camera_FD2CFF42_8A6F_23B9_41CE_1157835EE9CD",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -52.37,
   "pitch": 0
  },
  "id": "camera_FD3EFF4B_8A6F_224F_41D6_0A5B28396E10",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 149.66,
   "pitch": 0
  },
  "id": "camera_FD303F55_8A6F_225B_41D8_D118E0DE1ED6",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 152.77,
   "pitch": 0
  },
  "id": "camera_FDC39F5E_8A6F_2249_41CD_CD0D7CC4FC66",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -170.62,
   "pitch": 0
  },
  "id": "camera_FDD5FF68_8A6F_2249_41A2_72BD2EB6305E",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -132.72,
   "pitch": 0
  },
  "id": "camera_FDE57F71_8A6F_225B_41CB_670FC1F9BBA5",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 121.1,
   "pitch": 0
  },
  "id": "camera_FDF4EF7B_8A6F_224F_41C4_6DB05B858FC8",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -85.94,
   "pitch": 0
  },
  "id": "camera_FD863F84_8A6F_22B9_41D1_3525DF05BD1D",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -158.85,
   "pitch": 0
  },
  "id": "camera_FD992F8E_8A6F_22C9_41CF_C3C1DC671331",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 177.76,
   "pitch": 0
  },
  "id": "camera_FDAB1F97_8A6F_22C7_41C5_EA1C8EA15713",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 66.42,
   "pitch": 0
  },
  "id": "camera_FDBAAFA2_8A6F_22F9_41DB_5A970F296BA6",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -82.37,
   "pitch": 0
  },
  "id": "camera_FC4CEFAB_8A6F_22CF_41CA_3DFECE8234B0",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 128.39,
   "pitch": 0
  },
  "id": "camera_FC5C5FB5_8A6F_22DB_41DA_27D30DB561DE",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -161.35,
   "pitch": 0
  },
  "id": "camera_FC6FCFBE_8A6F_22C6_41CB_026F80B2C836",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -161.66,
   "pitch": 0
  },
  "id": "camera_FC611FC8_8A6F_2249_41B1_81E78391AD16",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.audio_DEBBAC78_8BEC_E649_41D7_F0FEA1249017",
 "this.audio_E4A30036_8A53_1DD9_41C2_A831C1E5CB8C",
 {
  "autoplay": true,
  "class": "MediaAudio",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_E5E432A3_8A5F_22FF_41C7_6C808FC24FF4.ogg",
   "mp3Url": "media/audio_E5E432A3_8A5F_22FF_41C7_6C808FC24FF4.mp3"
  },
  "data": {
   "label": "Armin Van Buuren - In And Out Of Love (Ian Tosel & Arthur M Remix 2016) (Music Video)"
  },
  "id": "audio_E5E432A3_8A5F_22FF_41C7_6C808FC24FF4"
 }
], "children": [
 {
  "toolTipBorderRadius": 3,
  "transitionMode": "blending",
  "borderRadius": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowOpacity": 1,
  "toolTipShadowSpread": 0,
  "playbackBarOpacity": 1,
  "paddingRight": 0,
  "toolTipPaddingRight": 6,
  "shadow": false,
  "toolTipFontFamily": "Arial",
  "progressBarOpacity": 1,
  "toolTipFontColor": "#606060",
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "progressBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBarBorderColor": "#000000",
  "playbackBarHeight": 10,
  "playbackBarRight": 0,
  "toolTipShadowVerticalLength": 0,
  "paddingLeft": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBottom": 0,
  "toolTipPaddingTop": 4,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressRight": 0,
  "toolTipTextShadowBlurRadius": 3,
  "progressBarBorderSize": 0,
  "playbackBarLeft": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressOpacity": 1,
  "toolTipPaddingLeft": 6,
  "height": "100%",
  "progressHeight": 10,
  "width": "100%",
  "progressBorderSize": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadOpacity": 1,
  "playbackBarProgressBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "toolTipFontStyle": "normal",
  "paddingTop": 0,
  "toolTipOpacity": 1,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipFontSize": 12,
  "top": 0,
  "toolTipDisplayTime": 600,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadow": true,
  "id": "MainViewer",
  "playbackBarBottom": 5,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBarBorderRadius": 0,
  "playbackBarHeadBorderSize": 0,
  "transitionDuration": 500,
  "playbackBarHeadShadowHorizontalLength": 0,
  "paddingBottom": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadWidth": 6,
  "minHeight": 50,
  "toolTipBorderColor": "#767676",
  "class": "ViewerArea",
  "propagateClick": false,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarProgressOpacity": 1,
  "progressBorderRadius": 0,
  "progressLeft": 0,
  "minWidth": 100,
  "playbackBarHeadHeight": 15,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipBorderSize": 1,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontWeight": "normal",
  "toolTipShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipPaddingBottom": 4,
  "playbackBarBorderSize": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipTextShadowColor": "#000000",
  "left": 0,
  "playbackBarBackgroundOpacity": 1,
  "progressBackgroundOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "borderSize": 0
 },
 {
  "bottom": 0,
  "layout": "horizontal",
  "borderRadius": 0,
  "verticalAlign": "bottom",
  "minHeight": 20,
  "class": "Container",
  "shadow": false,
  "backgroundOpacity": 0,
  "propagateClick": false,
  "paddingBottom": 0,
  "paddingRight": 0,
  "creationPolicy": "delayed",
  "minWidth": 20,
  "scrollBarMargin": 2,
  "children": [
   {
    "itemBorderRadius": 0,
    "itemLabelFontWeight": "normal",
    "itemVerticalAlign": "middle",
    "itemThumbnailOpacity": 1,
    "id": "ThumbnailList_C4970BF5_8A54_E25B_41DE_1E80716725E2",
    "backgroundColor": [
     "#000000"
    ],
    "itemOpacity": 1,
    "itemThumbnailShadow": true,
    "itemLabelFontFamily": "Arial",
    "itemThumbnailShadowVerticalLength": 3,
    "borderRadius": 5,
    "paddingBottom": 10,
    "layout": "horizontal",
    "itemThumbnailScaleMode": "fit_outside",
    "verticalAlign": "top",
    "minHeight": 1,
    "paddingRight": 20,
    "class": "ThumbnailList",
    "itemLabelPosition": "bottom",
    "backgroundOpacity": 0.2,
    "propagateClick": false,
    "itemThumbnailHeight": 75,
    "shadow": false,
    "itemPaddingBottom": 3,
    "scrollBarVisible": "rollOver",
    "scrollBarColor": "#FFFFFF",
    "itemLabelFontSize": 14,
    "selectedItemLabelFontWeight": "bold",
    "backgroundColorDirection": "vertical",
    "minWidth": 1,
    "scrollBarMargin": 2,
    "itemPaddingRight": 3,
    "backgroundColorRatios": [
     0
    ],
    "itemThumbnailShadowColor": "#000000",
    "itemBackgroundColorRatios": [],
    "itemBackgroundColor": [],
    "playList": "this.ThumbnailList_C4970BF5_8A54_E25B_41DE_1E80716725E2_playlist",
    "itemBackgroundOpacity": 0,
    "paddingLeft": 20,
    "horizontalAlign": "left",
    "width": "99.929%",
    "itemThumbnailShadowSpread": 1,
    "itemBackgroundColorDirection": "vertical",
    "height": 130,
    "itemHorizontalAlign": "center",
    "itemLabelFontColor": "#FFFFFF",
    "itemThumbnailShadowHorizontalLength": 3,
    "itemLabelFontStyle": "normal",
    "itemThumbnailBorderRadius": 26,
    "itemThumbnailWidth": 75,
    "itemMode": "normal",
    "data": {
     "name": "ThumbnailList1355"
    },
    "paddingTop": 10,
    "itemThumbnailShadowBlurRadius": 4,
    "scrollBarOpacity": 0.5,
    "itemThumbnailShadowOpacity": 0.8,
    "itemPaddingLeft": 3,
    "scrollBarWidth": 10,
    "itemLabelTextDecoration": "none",
    "gap": 10,
    "itemPaddingTop": 3,
    "itemLabelGap": 5,
    "borderSize": 0,
    "itemLabelHorizontalAlign": "center"
   }
  ],
  "overflow": "visible",
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "scrollBarVisible": "rollOver",
  "height": 200,
  "data": {
   "name": "Container500"
  },
  "paddingTop": 0,
  "left": 0,
  "scrollBarOpacity": 0.5,
  "right": 0,
  "gap": 10,
  "borderSize": 0,
  "scrollBarWidth": 10
 },
 {
  "id": "Image_C4A9A790_8A55_E2D9_41C5_E3631679C6D0",
  "borderRadius": 0,
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "minHeight": 1,
  "class": "Image",
  "backgroundOpacity": 0,
  "propagateClick": false,
  "shadow": false,
  "paddingRight": 0,
  "click": "this.showPopupImage(this.ImageResource_C57824D5_8A2D_265B_41D7_E0B3A30025A2, null, '90%', '90%', this.FadeInEffect_C57834D5_8A2D_265B_41D2_1B8E2A67A22E, this.FadeOutEffect_C57854D5_8A2D_265B_41D1_945E2F00547E, {'rollOverIconHeight':20,'pressedBorderColor':'#000000','borderColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'iconColor':'#000000','rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'paddingBottom':5,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'paddingRight':5,'iconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','iconHeight':20,'rollOverBorderColor':'#000000','pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1]}, null, null, false)",
  "minWidth": 1,
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "width": "9.681%",
  "data": {
   "name": "Image74122"
  },
  "height": "16.99%",
  "url": "skin/Image_C4A9A790_8A55_E2D9_41C5_E3631679C6D0.png",
  "scaleMode": "fit_inside",
  "paddingTop": 0,
  "maxWidth": 1092,
  "right": "0.04%",
  "borderSize": 0,
  "maxHeight": 1097,
  "top": "0.06%"
 },
 {
  "bottom": "94.18%",
  "id": "HTMLText_DFF4CF3C_8A37_23C9_41D7_FEFDF4748E5B",
  "borderRadius": 0,
  "minHeight": 1,
  "class": "HTMLText",
  "shadow": false,
  "backgroundOpacity": 0,
  "propagateClick": false,
  "paddingBottom": 20,
  "paddingRight": 20,
  "minWidth": 1,
  "scrollBarMargin": 2,
  "scrollBarColor": "#000000",
  "paddingLeft": 20,
  "scrollBarVisible": "rollOver",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#66ff99;font-size:11px;font-family:Tahoma, Geneva, sans-serif;\">CLICK ON THE ARROW ICONS TO NAVIGATE AROUND</SPAN></SPAN></DIV></div>",
  "data": {
   "name": "HTMLText53815"
  },
  "width": "21.809%",
  "paddingTop": 20,
  "scrollBarOpacity": 0.5,
  "right": "38.65%",
  "borderSize": 0,
  "scrollBarWidth": 10,
  "top": "0%"
 },
 {
  "toolTipBorderRadius": 3,
  "transitionMode": "blending",
  "borderRadius": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowOpacity": 1,
  "toolTipShadowSpread": 0,
  "playbackBarOpacity": 1,
  "paddingRight": 0,
  "toolTipPaddingRight": 6,
  "shadow": false,
  "toolTipFontFamily": "Arial",
  "progressBarOpacity": 1,
  "toolTipFontColor": "#606060",
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "progressBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBarBorderColor": "#000000",
  "playbackBarHeight": 10,
  "playbackBarRight": 0,
  "toolTipShadowVerticalLength": 0,
  "paddingLeft": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBottom": 2,
  "toolTipPaddingTop": 4,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressRight": 0,
  "toolTipTextShadowBlurRadius": 3,
  "progressBarBorderSize": 0,
  "playbackBarLeft": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressOpacity": 1,
  "toolTipPaddingLeft": 6,
  "height": "30%",
  "progressHeight": 10,
  "width": "40%",
  "progressBorderSize": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadOpacity": 1,
  "playbackBarProgressBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "toolTipFontStyle": "normal",
  "paddingTop": 0,
  "toolTipOpacity": 1,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipFontSize": 12,
  "top": "0%",
  "toolTipDisplayTime": 600,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadow": true,
  "id": "MapViewer",
  "playbackBarBottom": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBarBorderRadius": 0,
  "playbackBarHeadBorderSize": 0,
  "transitionDuration": 500,
  "playbackBarHeadShadowHorizontalLength": 0,
  "paddingBottom": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadWidth": 6,
  "minHeight": 1,
  "toolTipBorderColor": "#767676",
  "class": "ViewerArea",
  "propagateClick": false,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarProgressOpacity": 1,
  "progressBorderRadius": 0,
  "progressLeft": 0,
  "minWidth": 1,
  "playbackBarHeadHeight": 15,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipBorderSize": 1,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontWeight": "normal",
  "toolTipShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipPaddingBottom": 4,
  "playbackBarBorderSize": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipTextShadowColor": "#000000",
  "left": "0%",
  "playbackBarBackgroundOpacity": 1,
  "progressBackgroundOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "borderSize": 0
 },
 {
  "bottom": 0,
  "id": "veilPopupPanorama",
  "backgroundColor": [
   "#000000"
  ],
  "paddingBottom": 0,
  "minHeight": 0,
  "visible": false,
  "class": "UIComponent",
  "backgroundOpacity": 0.55,
  "propagateClick": false,
  "paddingRight": 0,
  "shadow": false,
  "backgroundColorDirection": "vertical",
  "minWidth": 0,
  "backgroundColorRatios": [
   0
  ],
  "borderRadius": 0,
  "paddingLeft": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "paddingTop": 0,
  "data": {
   "name": "UIComponent112313"
  },
  "left": 0,
  "right": 0,
  "borderSize": 0,
  "top": 0
 },
 {
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "backgroundColor": [],
  "paddingBottom": 0,
  "minHeight": 0,
  "visible": false,
  "class": "ZoomImage",
  "backgroundOpacity": 1,
  "propagateClick": false,
  "paddingRight": 0,
  "shadow": false,
  "backgroundColorDirection": "vertical",
  "minWidth": 0,
  "backgroundColorRatios": [],
  "borderRadius": 0,
  "paddingLeft": 0,
  "data": {
   "name": "ZoomImage112314"
  },
  "scaleMode": "custom",
  "paddingTop": 0,
  "left": 0,
  "right": 0,
  "borderSize": 0,
  "top": 0
 },
 {
  "iconBeforeLabel": true,
  "iconWidth": 20,
  "id": "closeButtonPopupPanorama",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "textDecoration": "none",
  "mode": "push",
  "borderRadius": 0,
  "paddingBottom": 5,
  "fontStyle": "normal",
  "iconColor": "#000000",
  "verticalAlign": "middle",
  "minHeight": 0,
  "visible": false,
  "rollOverIconColor": "#666666",
  "class": "CloseButton",
  "backgroundOpacity": 0.3,
  "propagateClick": false,
  "paddingRight": 5,
  "shadow": false,
  "layout": "horizontal",
  "backgroundColorDirection": "vertical",
  "minWidth": 0,
  "iconHeight": 20,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "fontFamily": "Arial",
  "fontWeight": "normal",
  "borderColor": "#000000",
  "cursor": "hand",
  "paddingLeft": 5,
  "horizontalAlign": "center",
  "shadowBlurRadius": 6,
  "iconLineWidth": 5,
  "shadowColor": "#000000",
  "fontColor": "#FFFFFF",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "shadowSpread": 1,
  "paddingTop": 5,
  "data": {
   "name": "CloseButton112315"
  },
  "fontSize": 12,
  "pressedIconColor": "#888888",
  "label": "",
  "right": 10,
  "gap": 5,
  "borderSize": 0,
  "top": 10
 }
], 
 "start": "this.playAudioList([this.audio_E5E432A3_8A5F_22FF_41C7_6C808FC24FF4]); this.syncPlaylists([this.ThumbnailList_C4970BF5_8A54_E25B_41DE_1E80716725E2_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "id": "rootPlayer",
 "scripts": {
  "getKey": function(key){  return window[key]; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "unregisterKey": function(key){  delete window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } }
 },
 "layout": "absolute",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "minHeight": 20,
 "mouseWheelEnabled": true,
 "mobileMipmappingEnabled": true,
 "class": "Player",
 "propagateClick": false,
 "shadow": false,
 "paddingRight": 0,
 "creationPolicy": "delayed",
 "minWidth": 20,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "height": "100%",
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Player498"
 },
 "gap": 10,
 "borderSize": 0,
 "scrollBarWidth": 10
})