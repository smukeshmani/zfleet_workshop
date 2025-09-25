var string = "";
var msg = "";
var owned = "";
var vorId = "";
var attType = "";
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageBox"
], function (Controller, JSONModel, MessageBox) {
	"use strict";

	return Controller.extend("Workshop.zfleet_workshop.controller.View1", {
		onInit: function () {

			var DrpDown = {
				"Descision": [{
					"DescisionKey": "1",
					"DescisionText": "Yes"
				}, {
					"DescisionKey": "2",
					"DescisionText": "No"
				}]
			};
			var oModeldrop = new JSONModel(DrpDown);
			this.getView().setModel(oModeldrop, "drpDown");

			var DrpDown2 = {
				"Descision": [{
					"DescisionKey": "1",
					"DescisionText": "Excellent"
				}, {
					"DescisionKey": "2",
					"DescisionText": "good"
				}, {
					"DescisionKey": "3",
					"DescisionText": "damaged"
				}]
			};
			var oModeldrop2 = new JSONModel(DrpDown2);
			this.getView().setModel(oModeldrop2, "drpDown2");

			var complete_url = window.location.href;
			var pieces = complete_url.split("ccc");
			if (pieces.length === 2) {
				string = pieces[1];
				this.zrecord = string.substr(1, 10);
				vorId = this.zrecord;
			}

			var that = this;
			var oModel = that.getOwnerComponent().getModel();
			var sPath = "/notificationSubmitSet('" + this.zrecord + "')";

			oModel.read(sPath, {
				success: function (oData, response) {
					var oModel3 = new sap.ui.model.json.JSONModel(oData);
					var osf = that.getView().byId("mainForm1");
					osf.setModel(oModel3);
					// var osf1 = that.getView().byId("drpdowns");
					// osf1.setModel(oModel3);
					if (oData.onsite_team === "Yes") {
						that.getView().byId("Rescue").setSelectedKey(1);
					} else if (oData.onsite_team === "No") {
						that.getView().byId("Rescue").setSelectedKey(2);
					}

					if (oData.teamvisit_date !== "00000000") {
						that.getView().byId("Date1").setVisible(true);
						that.getView().byId("DP1").setVisible(true);
						that.getView().byId("DP1").setValue(oData.teamvisit_date);

					}

					if (oData.teamvisit_time !== "") {
						that.getView().byId("Time1").setVisible(true);
						that.getView().byId("TP1").setVisible(true);
						that.getView().byId("TP1").setValue(oData.teamvisit_time);

					}

					// fixed at location

					if (oData.fixed_at_loc === "Yes") {
						that.getView().byId("fixed").setSelectedKey(1);
						that.getView().byId("fixedtext").setVisible(true);
						that.getView().byId("fixed").setVisible(true);
					} else if (oData.fixed_at_loc === "No") {
						that.getView().byId("fixed").setSelectedKey(2);
						that.getView().byId("fixedtext").setVisible(true);
						that.getView().byId("fixed").setVisible(true);
					}

					//  Repair 
					if (oData.repair === "Yes") {
						that.getView().byId("Repair").setSelectedKey(1);
						that.getView().byId("Repairtext").setVisible(true);
						that.getView().byId("Repair").setVisible(true);
					} else if (oData.repair === "No") {
						that.getView().byId("Repair").setSelectedKey(2);
						that.getView().byId("Repairtext").setVisible(true);
						that.getView().byId("Repair").setVisible(true);
					}

					if (oData.repair_date !== "00000000") {
						that.getView().byId("Date2").setVisible(true);
						that.getView().byId("DP2").setVisible(true);
						that.getView().byId("DP2").setValue(oData.repair_date);

					}

					if (oData.repair_time !== "") {
						that.getView().byId("Time2").setVisible(true);
						that.getView().byId("TP2").setVisible(true);
						that.getView().byId("TP2").setValue(oData.repair_time);

					}

					//  Tow  
					if (oData.tow_van === "Yes") {
						that.getView().byId("towvan").setSelectedKey(1);
						that.getView().byId("Towtext").setVisible(true);
						that.getView().byId("towvan").setVisible(true);
					} else if (oData.tow_van === "No") {
						that.getView().byId("towvan").setSelectedKey(2);
						that.getView().byId("Towtext").setVisible(true);
						that.getView().byId("towvan").setVisible(true);
					}

					if (oData.towvisit_date !== "00000000") {
						that.getView().byId("Date3").setVisible(true);
						that.getView().byId("DP3").setVisible(true);
						that.getView().byId("DP3").setValue(oData.towvisit_date);

					}

					if (oData.towvisit_time !== "") {
						that.getView().byId("Time3").setVisible(true);
						that.getView().byId("TP3").setVisible(true);
						that.getView().byId("TP3").setValue(oData.towvisit_time);

					}

					// 		fixed_at_loc: fixed_at_loc,
					// onsite_team: onsite_team,
					// teamvisit_date: teamvisit_date,
					// teamvisit_time: teamvisit_time,
					// tow_van: tow_van,
					// towvisit_date:towvisit_date,
					// towvisit_time: towvisit_time,
					// repair: repair,
					// repair_date: repair_date,
					// repair_time: repair_time,
					// vor_id: vorId,
					// Comment:comment

					if (oData.eqtyp === "O") {
						owned = "X";
					}

					if (oData.attachment1 === 'X') {
						that.getView().byId("L1").setVisible(true);
						that.getView().byId("onShowFront1").setVisible(true);

					}

					if (oData.attachment2 === 'X') {
						that.getView().byId("L2").setVisible(true);
						that.getView().byId("onShowFront2").setVisible(true);

					}

					if (oData.attachment3 === 'X') {
						that.getView().byId("L3").setVisible(true);
						that.getView().byId("onShowFront3").setVisible(true);

					}

					if (oData.attachment4 === 'X') {
						that.getView().byId("L4").setVisible(true);
						that.getView().byId("onShowFront4").setVisible(true);

					}

					if (oData.attachment5 === 'X') {
						that.getView().byId("L5").setVisible(true);
						that.getView().byId("onShowFront5").setVisible(true);

					}

					if (oData.attachment6 === 'X') {
						that.getView().byId("L6").setVisible(true);
						that.getView().byId("onShowFront6").setVisible(true);

					}

					if (oData.attachment7 === 'X') {

						that.getView().byId("textcore").setVisible(true);
						that.getView().byId("L7").setVisible(true);
						that.getView().byId("onShowFront7").setVisible(true);

					}
					if (oData.attachment8 === 'X') {
						that.getView().byId("L8").setVisible(true);
						that.getView().byId("onShowFront8").setVisible(true);

					}
					if (oData.attachment9 === 'X') {
						that.getView().byId("L9").setVisible(true);
						that.getView().byId("onShowFront9").setVisible(true);

					}
					if (oData.attachment10 === 'X') {
						that.getView().byId("L10").setVisible(true);
						that.getView().byId("onShowFront10").setVisible(true);

					}

				},
				error: function (oData, response) {

				}
			});

		},

		showComment: function () {
			var that = this;
			var filter = [];
			var oModel = this.getOwnerComponent().getModel();
			var myFilter = new sap.ui.model.Filter("vor_id", sap.ui.model.FilterOperator.EQ, (vorId));
			filter.push(myFilter);
			var sPath1 = "/CommentSet";
			oModel.read(sPath1, {
				filters: filter,

				success: function (oData3, response1) {
					var oTableJSON = new sap.ui.model.json.JSONModel();
					var Data = {
						Table: oData3.results,
					};
					oTableJSON.setData(Data);
					that.getView().byId("IdClearanceType1").setVisible(true);
					that.getView().byId("id1").setModel(oTableJSON, "Data");
				},

				error: function () {
					// that.getView().getModel("localModel").setProperty("/SumitRequestVisible", false);
					// sap.m.MessageToast.show("No Data retreived");
				}
			});

		},
		onSaveRequest: function () {
			var that = this;
			var oModel = this.getOwnerComponent().getModel();
			var fixed_at_loc = this.getView().byId("fixed")._getSelectedItemText();

			var onsite_team = this.getView().byId("Rescue")._getSelectedItemText();
			var teamvisit_date = this.getView().byId("DP1").getValue();
			var teamvisit_time = this.getView().byId("TP1").getValue();

			var tow_van = this.getView().byId("towvan")._getSelectedItemText();
			var towvisit_date = this.getView().byId("DP3").getValue();
			var towvisit_time = this.getView().byId("TP3").getValue();

			var repair = this.getView().byId("Repair")._getSelectedItemText();
			var repair_date = this.getView().byId("DP2").getValue();
			var repair_time = this.getView().byId("TP2").getValue();
			var comment = this.getView().byId("idComment").getValue();
			
			var jack = this.getView().byId("Jack")._getSelectedItemText();
			var jackhandle = this.getView().byId("JackHandle")._getSelectedItemText();
			var sparetire = this.getView().byId("SpareTire")._getSelectedItemText();
			var triangle = this.getView().byId("Triangle")._getSelectedItemText();
			var wheelspanner = this.getView().byId("WheelSpanner")._getSelectedItemText();
			var fireextngr = this.getView().byId("FireExtinguisher")._getSelectedItemText();
			var airpipe = this.getView().byId("AirPipe")._getSelectedItemText();
			var radio = this.getView().byId("Radio")._getSelectedItemText();
			var fuelcap = this.getView().byId("FuelCap")._getSelectedItemText();
			var airscoop = this.getView().byId("AirScoop")._getSelectedItemText();
			var windscreenscratch = this.getView().byId("WindScreenScratch")._getSelectedItemText();
			var fronttype = this.getView().byId("FrontTyre")._getSelectedItemText();
			var backtyre = this.getView().byId("BackTyre")._getSelectedItemText();
			var lightcondition = this.getView().byId("LightCondition")._getSelectedItemText();
			var bodyscratch = this.getView().byId("BodyScratch")._getSelectedItemText();
			var mirrorrearview = this.getView().byId("MirrorRearView")._getSelectedItemText();
			var indecation = this.getView().byId("Indecation")._getSelectedItemText();
			var taillight = this.getView().byId("TailLight")._getSelectedItemText();
			var sidelight = this.getView().byId("SideLight")._getSelectedItemText();
			var numberplate = this.getView().byId("NumberPlate")._getSelectedItemText();
			var protectionbars = this.getView().byId("ProtectionBars")._getSelectedItemText();
			var istimarah = this.getView().byId("Istimarah")._getSelectedItemText();
			var fahssticker = this.getView().byId("FahsSticker")._getSelectedItemText();
			var motcards = this.getView().byId("MotCards")._getSelectedItemText();
			var brandingquality = this.getView().byId("BrandingQuality")._getSelectedItemText();


			var Entry = {

				jack: jack,
				jackhandle: jackhandle,
				sparetire: sparetire,
				triangle: triangle,
				wheelspanner: wheelspanner,
				fireextngr: fireextngr,
				airpipe: airpipe,
				radio: radio,
				fuelcap: fuelcap,
				airscoop: airscoop,
				windscreenscratch: windscreenscratch,
				fronttype: fronttype,
				backtyre: backtyre,
				lightcondition: lightcondition,
				bodyscratch: bodyscratch,
				mirrorrearview: mirrorrearview,
				indecation: indecation,
				taillight: taillight,
				sidelight: sidelight,
				numberplate: numberplate,
				protectionbars: protectionbars,
				istimarah: istimarah,
				fahssticker: fahssticker,
				motcards: motcards,
				brandingquality: brandingquality,
				fixed_at_loc: fixed_at_loc,
				onsite_team: onsite_team,
				teamvisit_date: teamvisit_date,
				teamvisit_time: teamvisit_time,
				tow_van: tow_van,
				towvisit_date: towvisit_date,
				towvisit_time: towvisit_time,
				repair: repair,
				repair_date: repair_date,
				repair_time: repair_time,
				vor_id: vorId,
				Comment: comment

			};

			oModel.create("/WorkshopSet",
				Entry, {
					success: function (data) {
						if (data.eMsg === "") {
							msg = "Claim ID  has been Saved";
						} else {
							msg = data.eMsg;
						}

						that.getView().byId("Idsubmit").setVisible(false);

						sap.m.MessageBox.alert(
							msg, {
								//			styleClass: bCompact ? "sapUiSizeCompact" : ""
								onClose: function (oAction) {
									//	window.print();
									// window.location.reload();
								}
							}

						);
					},
					error: function (data) {
						debugger;
						sap.m.MessageBox.alert(
							"Error in submitting Claim  !", {
								//			styleClass: bCompact ? "sapUiSizeCompact" : ""
								onClose: function (oAction) {
									//	window.print();
									// window.location.reload();
								}
							}

						);
					}
				});
		},

		onShow: function (oEvent) {

			debugger;
			var a = oEvent.getParameters();
			var c = a.id;
			var b = c.split('--');
			var id = b[2];
			var ApprovalLvl1 = "";
			if (id === "onShowFront1") {
				ApprovalLvl1 = 'AT1';
			}

			if (id === "onShowFront2") {
				ApprovalLvl1 = 'AT2';
			}

			if (id === "onShowFront3") {
				ApprovalLvl1 = 'AT3';
			}

			if (id === "onShowFront4") {
				ApprovalLvl1 = 'AT1';
			}

			if (id === "onShowFront5") {
				ApprovalLvl1 = 'AT5';
			}

			if (id === "onShowFront6") {
				ApprovalLvl1 = 'AT6';
			}

			if (id === "onShowFront7") {
				ApprovalLvl1 = 'AT7';
			}
			if (id === "onShowFront8") {
				ApprovalLvl1 = 'AT8';
			}
			if (id === "onShowFront9") {
				ApprovalLvl1 = 'AT9';
			}

			if (id === "onShowFront10") {
				ApprovalLvl1 = 'AT10';
			}

			if (ApprovalLvl1 !== "") {
				//call SAP and get file data
				var that = this;
				var oModel = that.getOwnerComponent().getModel();
				var sPath = "/attachmentsSet(zvor_id=" + "'" + this.zrecord + "'" + ",Ztype=" + "'" + ApprovalLvl1 + "'" + ")"; // sap.ui.model.FilterOperator.EQ, Ztempid )";

				oModel.read(sPath, {
					success: function (oData, response) {
						//var oModel3 = new sap.ui.model.json.JSONModel(oData);
						var fMres = oData.Content;
						var fType = oData.Filetype;
						var fName = oData.Filename;

						fMres = "data:" + fType + ";base64," + fMres;

						if (!that.displayContent) {
							that.displayContent = sap.ui.xmlfragment("Workshop.zfleet_workshop.fragment.filepreview", that);
							that.getView().addDependent(that.displayContent);
						}

						var splitTest = fType.split("/");
						var mimType = splitTest[0];
						var fType = fName.split(".");
						var fileType = fType[1];

						switch (mimType) {
						case 'image':
							sap.ui.getCore().byId("idPdfViewer").setVisible(false);
							sap.ui.getCore().byId("image").setVisible(true);
							sap.ui.getCore().byId("image").setSrc(fMres);
							break;
						default:
							sap.ui.getCore().byId("idPdfViewer").setVisible(true);
							sap.ui.getCore().byId("image").setVisible(false);
							var html = sap.ui.getCore().byId("idPdfViewer");
							html.setContent('<iframe src="' + fMres +
								'" embedded="true" frameborder="0" target="_top" width="2000px" height="2000px"></iframe>');
							break;
						}
						debugger;
						if (fileType !== "docx" && fileType !== "pub" && fileType !== "xls" && fileType !== "ppt" && fileType !== "doc" && fileType !==
							"xlsx") {
							that.displayContent.open();
							that.fragOpen = true;
						}
						if (that.fragOpen === undefined) {
							window.open(fMres, "_self");
							fMres = fMres.replace("data:APPLICATION/WWI;base64,", "");
						}

						//	this.displayContent.open();

					},
					error: function () {

						sap.m.MessageToast.show("No Data retreived");
					}

				});
			}

		},

		onPressBarCloseBtn: function (oEvent) {
			this.displayContent.close();
			this.fragOpen = undefined;
		},

		onSaveFront1: function (oEvent) {
			var oFileUploader = " ";

			var a = oEvent.getParameters();
			var c = a.id;
			var b = c.split('--');
			var id = b[2];
			var ApprovalLvl1 = "";
			if (id === "onSaveFront1") {
				attType = 'WT1';
				oFileUploader = this.getView().byId("idfront1");
			}

			if (id === "onSaveFront2") {
				attType = 'WT2';
				oFileUploader = this.getView().byId("idfront2");
			}

			if (id === "onSaveBack1") {
				attType = 'WT3';
				oFileUploader = this.getView().byId("idback1");
			}

			if (id === "onSaveBack2") {
				attType = 'WT4';
				oFileUploader = this.getView().byId("idback2");
			}

			if (id === "onSaveRight1") {
				attType = 'WT5';
				oFileUploader = this.getView().byId("idRight1");
			}

			var that = this;
			var domRef = oFileUploader.getFocusDomRef();
			if (domRef.files.length !== 0) {
				var file = domRef.files[0];

				that.filenameLicense = file.name;
				that.filetypeLicense = file.type;
				// this.getView().byId("fileUploader").setValueState(sap.ui.core.ValueState.None);
				var reader = new FileReader();

				reader.onload = function (e) {
					var vContent = e.currentTarget.result.replace("data:" + file.type + ";base64,", "");
					that.postFileToBackend(vorId, attType, that.filenameLicense, that.filetypeLicense, vContent);
				};

				reader.readAsDataURL(file);
			}
		},

		postFileToBackend: function (vorId1, attType1, filename, filetype, content) {
			var payload = {
				"zvor_id": vorId1,
				"Ztype": attType1,
				"Content": content,
				"Filename": filename,
				"Filetype": filetype

			};

			var oModel = this.getView().getModel();
			oModel.create("/attachmentsSet",
				payload, {
					success: function (oData, response) {
						msg = "File Has been Uploaded!!";
						sap.m.MessageBox.alert(
							msg, {
								//			styleClass: bCompact ? "sapUiSizeCompact" : ""
								onClose: function (oAction) {
									//	window.print();
									// window.location.reload();
								}
							}

						);
					},
					error: function (oError) {
						msg = "File Has been Uploaded!!";
						sap.m.MessageBox.alert(
							msg, {
								//			styleClass: bCompact ? "sapUiSizeCompact" : ""
								onClose: function (oAction) {
									//	window.print();
									// window.location.reload();
								}
							}

						);

					}
				});
		},

		onChangefixed: function (oEvent) {
			var a = this.getView().byId("fixed")._getSelectedItemText();
			if (a === "Yes") {

				if (owned === "X") {

					this.getView().byId("Repairtext").setVisible(true);
					this.getView().byId("Repair").setVisible(true);
				} else {
					MessageBox.confirm("Please submit request to Fleet clerk for furthur apporval.");
				}
				// this.getView().byId("Rescuetext").setVisible(true);
				// this.getView().byId("Rescue").setVisible(true);
				this.getView().byId("Towtext").setVisible(false);
				this.getView().byId("towvan").setVisible(false);

			} else if (a === "No") {
				// this.getView().byId("Rescuetext").setVisible(false);
				// this.getView().byId("Rescue").setVisible(false);
				if (owned === "X") {
					this.getView().byId("Towtext").setVisible(true);
					this.getView().byId("towvan").setVisible(true);

					this.getView().byId("Repairtext").setVisible(false);
					this.getView().byId("Repair").setVisible(false);
					this.getView().byId("Date2").setVisible(false);
					this.getView().byId("DP2").setVisible(false);
					this.getView().byId("Time2").setVisible(false);
					this.getView().byId("TP2").setVisible(false);
				}

			}

		},

		onChangefixed2: function (oEvent) {
			var a = this.getView().byId("Rescue")._getSelectedItemText();
			if (a === "Yes") {

				// this.getView().byId("Repairtext").setVisible(true);
				// this.getView().byId("Repair").setVisible(true);
				this.getView().byId("fixedtext").setVisible(true);
				this.getView().byId("fixed").setVisible(true);

				// MessageBox.confirm("Please submit request to Fleet clerk for furthur apporval.");

				this.getView().byId("Date1").setVisible(true);
				this.getView().byId("DP1").setVisible(true);
				this.getView().byId("Time1").setVisible(true);
				this.getView().byId("TP1").setVisible(true);
				this.getView().byId("Towtext").setVisible(false);
				this.getView().byId("towvan").setVisible(false);
				// 	this.getView().byId("Date3").setVisible(false);
				// this.getView().byId("DP3").setVisible(false);
				// this.getView().byId("Time3").setVisible(false);
				// this.getView().byId("TP3").setVisible(false);
			} else if (a === "No") {
				this.getView().byId("Date1").setVisible(false);
				this.getView().byId("DP1").setVisible(false);
				this.getView().byId("Time1").setVisible(false);
				this.getView().byId("TP1").setVisible(false);
				this.getView().byId("Towtext").setVisible(true);
				this.getView().byId("towvan").setVisible(true);

			}
		},

		onChangefixed3: function (oEvent) {
			var a = this.getView().byId("towvan")._getSelectedItemText();
			if (a === "Yes" && owned === "X") {
				this.getView().byId("Date3").setVisible(true);
				this.getView().byId("DP3").setVisible(true);
				this.getView().byId("Time3").setVisible(true);
				this.getView().byId("TP3").setVisible(true);
				// this.getView().byId("Truck").setVisible(true);
				this.getView().byId("Date4").setVisible(true);
				this.getView().byId("DP4").setVisible(true);
				this.getView().byId("Time4").setVisible(true);
				this.getView().byId("TP4").setVisible(true);

				this.getView().byId("Date5").setVisible(true);
				this.getView().byId("DP5").setVisible(true);
				this.getView().byId("Time5").setVisible(true);
				this.getView().byId("TP5").setVisible(true);

				this.getView().byId("Date6").setVisible(true);
				this.getView().byId("DP6").setVisible(true);
				this.getView().byId("Time6").setVisible(true);
				this.getView().byId("TP6").setVisible(true);
				// this.getView().byId("TruckNum").setVisible(true);
			} else if (a === "No" && owned === "X") {
				this.getView().byId("Date3").setVisible(false);
				this.getView().byId("DP3").setVisible(false);
				this.getView().byId("Time3").setVisible(false);
				this.getView().byId("TP3").setVisible(false);
				// this.getView().byId("Truck").setVisible(false);
				// this.getView().byId("TruckNum").setVisible(false);
				this.getView().byId("Date4").setVisible(false);
				this.getView().byId("DP4").setVisible(false);
				this.getView().byId("Time4").setVisible(false);
				this.getView().byId("TP4").setVisible(false);

				this.getView().byId("Date5").setVisible(false);
				this.getView().byId("DP5").setVisible(false);
				this.getView().byId("Time5").setVisible(false);
				this.getView().byId("TP5").setVisible(false);

				this.getView().byId("Date6").setVisible(false);
				this.getView().byId("DP6").setVisible(false);
				this.getView().byId("Time6").setVisible(false);
				this.getView().byId("TP6").setVisible(false);
			}
		},

		onChangefixed4: function (oEvent) {
			var a = this.getView().byId("Repair")._getSelectedItemText();
			if (a === "Yes" && owned === "X") {
				this.getView().byId("Date2").setVisible(true);
				this.getView().byId("DP2").setVisible(true);
				this.getView().byId("Time2").setVisible(true);
				this.getView().byId("TP2").setVisible(true);
				
				this.getView().byId("Reporttext").setVisible(true);
				this.getView().byId("Report").setVisible(true);
				// this.getView().byId("Date4").setVisible(true);
				// this.getView().byId("DP4").setVisible(true);
				// this.getView().byId("Time4").setVisible(true);
				// this.getView().byId("TP4").setVisible(true);

				// this.getView().byId("Date5").setVisible(true);
				// this.getView().byId("DP5").setVisible(true);
				// this.getView().byId("Time5").setVisible(true);
				// this.getView().byId("TP5").setVisible(true);

				// this.getView().byId("Date6").setVisible(true);
				// this.getView().byId("DP6").setVisible(true);
				// this.getView().byId("Time6").setVisible(true);
				// this.getView().byId("TP6").setVisible(true);

				this.getView().byId("Towtext").setVisible(false);
				this.getView().byId("towvan").setVisible(false);
				this.getView().byId("Date3").setVisible(false);
				this.getView().byId("DP3").setVisible(false);
				this.getView().byId("Time3").setVisible(false);
				this.getView().byId("TP3").setVisible(false);
			
				// this.getView().byId("Truck").setVisible(false);
				// this.getView().byId("TruckNum").setVisible(false);
			} else if (a === "No" && owned === "X") {
				this.getView().byId("Date2").setVisible(false);
				this.getView().byId("DP2").setVisible(false);
				this.getView().byId("Time2").setVisible(false);
				this.getView().byId("TP2").setVisible(false);
				this.getView().byId("Towtext").setVisible(true);
				this.getView().byId("towvan").setVisible(true);
				
					this.getView().byId("Reporttext").setVisible(false);
				this.getView().byId("Report").setVisible(false);
				//  this.getView().byId("Date3").setVisible(true);
				//  this.getView().byId("DP3").setVisible(true);
				//  this.getView().byId("Time3").setVisible(true);
				//  this.getView().byId("TP3").setVisible(true);
				//  	this.getView().byId("Truck").setVisible(true);
				// this.getView().byId("TruckNum").setVisible(true);
				// this.getView().byId("Date4").setVisible(false);
				// this.getView().byId("DP4").setVisible(false);
				// this.getView().byId("Time4").setVisible(false);
				// this.getView().byId("TP4").setVisible(false);

				// this.getView().byId("Date5").setVisible(false);
				// this.getView().byId("DP5").setVisible(false);
				// this.getView().byId("Time5").setVisible(false);
				// this.getView().byId("TP5").setVisible(false);

				// this.getView().byId("Date6").setVisible(false);
				// this.getView().byId("DP6").setVisible(false);
				// this.getView().byId("Time6").setVisible(false);
				// this.getView().byId("TP6").setVisible(false);
			}
		},
		onChangefixed1: function () {
			this.getView().byId("DP1").setVisible(true);
			this.getView().byId("TP1").setVisible(true);
		}

	});
});