import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, ScrollView, Button, Image, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Picker } from '@react-native-picker/picker';
import { Card, IconButton } from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
var Environment = require('../../environment.js');
//import Modal from 'react-native-modal';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import base64 from 'react-native-base64';


const data = [
  { id: '1', fileID: '37', fileNo: '474', companyName: 'Bajaj Holdings Investment Limited', country: 'INDIA' },
  { id: '2', fileID: '37', fileNo: '474', companyName: 'Federal Bank Limited', country: 'INDIA' },
];

const AddFile = () => {
  const [open, setOpen] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [openEntries, setOpenEntries] = useState(false);
  const [imageBase64, setImageBase64] = useState([]);
  const [Imageurl, SetImageurl] = useState("");
  const [Username, setUsername] = useState("");
  const [comments, setcomments] = useState([]);
  const [assignteamls, setassignteamls] = useState([]);
  const [assignteamMemberls, setassignteamMemberls] = useState([]);
  const [BdstatusList, setBdstatusList] = useState([]);
  const [valueEntries, setValueEntries] = useState('10');
  const [value, setValue] = useState(null);
  const [comment, setcomment] = useState("");
  const [documentType, setdocumentType] = useState("");

  const [file, setFile] = useState(null);
  const [Fileid, setFileid] = useState('');
  const [assignteammember, setassignteammember] = useState('');
  const [assignteam, setassignteam] = useState('');
  const [Fileno, setFileno] = useState('');
  const [Companyname, setCompanyname] = useState('');
  const [Investorfirstname, setInvestorfirstname] = useState('');
  const [Investormiddlename, setInvestormiddlename] = useState('');
  const [Investorlastname, setInvestorlastname] = useState('');
  const [Investorfullname, setInvestorfullname] = useState('');
  const [Fatherfirstname, setFatherfirstname] = useState('');
  const [Fathermiddlename, setFathermiddlename] = useState('');
  const [Fatherlastname, setFatherlastname] = useState('');
  const [Fatherfullname, setFatherfullname] = useState('');
  const [Address, setAddress] = useState('');
  const [Country, setCountry] = useState('');
  const [State, setState] = useState('');
  const [District, setDistrict] = useState('');
  const [Pincode, setPincode] = useState('');
  const [Pancard, setPancard] = useState('');
  const [Fulladdressconsolodation, setFulladdressconsolodation] = useState('');
  const [Folionumber, setFolionumber] = useState('');
  const [DPid, setDPid] = useState('');
  const [Unclaimedshares, setUnclaimedshares] = useState('');
  const [ProposeddateofTransfer, setProposeddateofTransfer] = useState('');
  const [Dateofbirth, setDateofbirth] = useState('');
  const [Aadharnumber, setAadharnumber] = useState('');
  const [Nomineename, setNomineename] = useState('');
  const [Jointholdername, setJointholdername] = useState('');
  const [Marketvalue, setMarketvalue] = useState('');
  const [Bdcasestudy, setBdcasestudy] = useState('');
  const [Bdcasetype, setBdcasetype] = useState('');
  const [Bdstatus, setBdstatus] = useState('');
  const [Bdconfidencelevel, setBdconfidencelevel] = useState('');

  const [Assigntobd, setAssigntobd] = useState('');


  const [Mobileno, setMobileno] = useState('');

  const [Rtastatus, setRtastatus] = useState('');
  const [Noofshares, setNoofshares] = useState('');
  const [Bdstatustel, setBdstatustel] = useState('');
  const [Iepf, setIepf] = useState('');
  const [Physical, setPhysical] = useState('');
  const [TelinSuspense, setTelinSuspense] = useState('');
  const [Refrencenumber, setRefrencenumber] = useState('');
  const [Lettertrackingnumber, setLettertrackingnumber] = useState('');
  const [Letterstatus, setLetterstatus] = useState('');
  const [Variablestatus, setVariablestatus] = useState('');
  const [Opscertificateumber, setOpscertificateumber] = useState('');
  const [Opsdistinctivenumber, setOpsdistinctivenumber] = useState('');
  const [Opsworkstatus, setOpsworkstatus] = useState('');
  const [Opscasetype, setOpscasetype] = useState('');
  const [Opsstages, setOpsstages] = useState('');
  const [Opsdividendcredited, setOpsdividendcredited] = useState('');
  const [Opssharescredited, setOpssharescredited] = useState('');
  const [Opsinvoiceissued, setOpsinvoiceissued] = useState('');
  const [Opspaymentreceived, setOpspaymentreceived] = useState('');


  

  

 
  const [fileData, setFileData] = useState([]); // Define fileData state



  
  const [itemsEntries, setItemsEntries] = useState([
    { label: '10', value: '10' },
    { label: '25', value: '25' },
    { label: '50', value: '50' },
  ]);

  const documentTypes = [
    { label: 'Adhar Card', value: 'Adhar_Card' },
    { label: 'Pan Card', value: 'Pan_Card' },
    { label: 'Passport', value: 'Passport' },
    { label: 'Driver License', value: 'Driver_License' },
  ];
  const [items, setItems] = useState([
    { label: 'Select the team member', value: '' },
    { label: 'Member 1', value: 'member1' },
    { label: 'Member 2', value: 'member2' },
    { label: 'Member 3', value: 'member3' },
    { label: 'Member 4', value: 'member4' },
    { label: 'Member 5', value: 'member5' },
    { label: 'Member 6', value: 'member6' },
    { label: 'Member 7', value: 'member7' },
    { label: 'Member 8', value: 'member8' },
    { label: 'Member 9', value: 'member9' },
    { label: 'Member 10', value: 'member10' },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.tableRow}>
      <Text style={styles.cell}>{item.fileID}</Text>
      <View style={styles.verticalDivider}></View>
      <Text style={styles.cell}>{item.adharCard}</Text>
      <View style={styles.verticalDivider}></View>
      <Text style={styles.cell}>{item.panCard}</Text>
    </View>
  );



  const [isPersonalModalVisible, setPersonalModalVisible] = useState(false);
  const [isBDModalVisible, setBDModalVisible] = useState(false);
  const [isTeleModalVisible, setTeleModalVisible] = useState(false);
  const [isOPModalVisible, setOPModalVisible] = useState(false);
  const [iscommentmodalvisible, setiscommentmodalvisible] = useState(false);




  const togglePersonalModal = () => {
    setPersonalModalVisible(!isPersonalModalVisible);
  };
  const chooseFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setFile(res[0]);
      setModalVisible(false);
      console.log('File selected:', res[0]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        console.error('Error choosing file:', err);
      }
    }
  };


  const uploadFile = async () => {
    if (!file) {
      console.error('No file selected.');
      return;
    }

    if (!documentType) {
      console.error('No document type selected.');
      return;
    }

    let body = new FormData();
    body.append('Img', {
      name: file.name,
      type: `image/jpeg`,
      uri: file.uri,
    });
    body.append(
      'jq data',
      JSON.stringify({
        Document_Description: "",
        FileID: 43,
        Document_Type: documentType
      }));
    const requestOptions = {
      method: 'POST',
      headers: {
        // "Content-Type": "application/json",
        'Content-Type': 'multipart/form-data',
      },
      body: body,
    };

    fetch(Environment.BASE_URL + '/UploadKycDocument', requestOptions)
      .then(response => response.json())
      .then(async result => {
        console.log(
          'UploadKycDocumentResponse==================================------',
          result,
        );

      });


  };
  const fetchFileData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const usern = await AsyncStorage.getItem('Username');
      setUsername(usern);
      await fetch(Environment.BASE_URL + "/EditFile", {
        method: 'POST',


        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          File_ID: 26,
          token: token
        }),
      })
        .then(response => response.json())
        .then(async (data) => {
          console.log('GetFilesDetails:', data);
          const updatedFileData = data.result.EditRecordViewModel;
          console.log('detailsss_______:', updatedFileData.Teams);

          if (!data.isException) {
            // Assuming data.result is an array of file details as described
            await setFileData(updatedFileData);
            setcomments(data.result?.comments)
            setassignteamls(updatedFileData.Teams)
            setFileid(JSON.stringify(updatedFileData.Record.File_ID))
            setFileno(updatedFileData.Record.File_No)
            setCompanyname(updatedFileData.Record.Company_Name)
            setInvestorfirstname(updatedFileData.Record.Investor_First_Name)
            setInvestormiddlename(updatedFileData.Record.Investor_Middle_Name)
            setInvestorlastname(updatedFileData.Record.Investor_Last_Name)
            setInvestorfullname(updatedFileData.Record.Investor_Full_Name)
            setFathermiddlename(updatedFileData.Record.Father_Middle_Name)
            setFatherlastname(updatedFileData.Record.Father_Last_Name)
            setFatherfullname(updatedFileData.Record.Father_Full_Name)
            setAddress(updatedFileData.Record.Address)
            setCountry(updatedFileData.Record.Country)
            setState(updatedFileData.Record.State)
            setDistrict(updatedFileData.Record.District)
            setPincode(updatedFileData.Record.PinCode)
            setFulladdressconsolodation(updatedFileData.Record.Consolidated_Address)
            setFolionumber(updatedFileData.Record.Folio_Number)
            setDPid(updatedFileData.Record.Dp_id)
            setUnclaimedshares(updatedFileData.Record.Unclaimed_shares)
            setProposeddateofTransfer(updatedFileData.Record.Praposed_Date_of_Transfer)
            setPancard(updatedFileData.Record.Pan_Card)
            setDateofbirth(updatedFileData.Record.Date_of_Birth)
            setAadharnumber(updatedFileData.Record.Aadhar_number)
            setNomineename(updatedFileData.Record.Nominee_Name)
            setMarketvalue(updatedFileData.Record.Market_Value)
            setBdcasestudy(updatedFileData.Record.BD_Case_Study)
            setBdcasetype(updatedFileData.Record.BD_Case_Type)
            setBdstatus(updatedFileData.Record.BD_Status)
            setBdconfidencelevel(updatedFileData.Record.BD_Confidence_Level)
            setAssigntobd(updatedFileData.Record.Assign_To_BD)
            setRtastatus(updatedFileData.Record.RTA_Status)
            setNoofshares(JSON.stringify(updatedFileData.Record.No_Of_Share))
            setIepf(updatedFileData.Record.IEPF)
            setPhysical(updatedFileData.Record.Physical)
            setTelinSuspense(updatedFileData.Record.Tel_InSuspense)
            setRefrencenumber(updatedFileData.Record.Refrence_Number)
            setLettertrackingnumber(updatedFileData.Record.Letter_Tracking_Number)
            setLetterstatus(updatedFileData.Record.Letter_Status)
            setVariablestatus(updatedFileData.Record.Variable_Status)
            setOpscertificateumber(updatedFileData.Record.Ops_CertificateNumber)
            setOpsdistinctivenumber(updatedFileData.Record.Ops_DistinctiveNumber)
            setOpsworkstatus(updatedFileData.Record.Ops_WorkStatus)
            setOpscasetype(updatedFileData.Record.Ops_CaseType)
            setOpsstages(updatedFileData.Record.Ops_Stages)
            setOpsdividendcredited(updatedFileData.Record.Ops_DividendCredited)
            setOpssharescredited(updatedFileData.Record.Ops_SharesCredited)
            setOpsinvoiceissued(updatedFileData.Record.Ops_InvoiceIssued)
            setOpspaymentreceived(updatedFileData.Record.Ops_PaymentReceived)
           



            if (data.result?.BdStatusList) {
              var newarray = data.result?.BdStatusList.map((item) => {
                return { label: item.BD_Status, value: item.Id };
              })
              setBdstatusList(newarray);
              // console.log("newwwwwwwww____",newarray) 
            }
            // setBdstatusList(data.result?.BdStatusList)
          }

          // console.log("filedetailsssgggssss", updatedFileData.Record.File_ID);
          // if (data?.result?.KycDocumentList[0]?.Adhar_Card) {
          //   console.log("imaggeeeeee_____",data?.result?.KycDocumentList[0]?.Adhar_Card)
          //   const adharCardBytes = data.result.KycDocumentList[0].Adhar_Card;
          //   // Convert the byte array to a base64 string
          //   const base64Image = `data:image/jpeg;base64,${base64.encode(adharCardBytes)}`;
          //   // console.log('Base64 Image:', base64Image.slice(0,1000));
          //   const byteArray = convertBase64ToByteArray(base64Image);
          //   setImageBase64(byteArray);
          // }



        }) 
        .catch(error => {
          console.error('Error fetching data:', error);
        });



    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchFileData();
  }, []);

  const byteArrayToBase64 = (byteArray) => {
    return `data:image/jpeg;base64,${encode(byteArray)}`;
  };
  function convertBase64ToByteArray(base64Image) {
    const base64Data = base64Image.replace(/^data:image\/[a-z]+;base64,/, '');
    const byteArr = base64.decode(base64Data);
    return byteArr;
  }
  const toggleBDModal = () => {
    setBDModalVisible(!isBDModalVisible);
  };
  const toggleTeleModal = () => {
    setTeleModalVisible(!isTeleModalVisible);
  };
  const toggleOPModal = () => {
    setOPModalVisible(!isOPModalVisible);
  };
  const toggleCommentModal = async () => {
    setiscommentmodalvisible(!iscommentmodalvisible);

  };
  const handleCommentSectionSubmit = async () => {
    try {


      // this.setState({spinner:true })

      let error = 0;

      if (comment.trim() == '') {

        error = error + 1;
      } else {

      }



      let token = await AsyncStorage.getItem('token');

      if (error > 0) {
        console.log('error===============');
        return false;
      }
      const requestOptions1 = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${parsedValue.user.auth_token}`,
        },
        body: JSON.stringify({
          CommentText: comment,
          User_ID: 13 ,
          File_ID:Fileid ,
          token:token 
        }),
      };
      console.log(
        'dataSendforCommentsection______________________',
        JSON.stringify({
          CommentText: comment,
          User_ID: 13 ,
          File_ID:Fileid ,
          token:token 
        }),
      );

      setcomment("")
      await fetch(Environment.BASE_URL + '/Comments', requestOptions1)
        .then(response => response.json())
        .then(async result => {
          console.log('PostComments----------------------', result);
          if (result.isException == false) {
              Alert.alert(result.result);
          } else {
              Alert.alert(result.result);
          }
          
        })
        
        .catch(error => {
          console.error('Errorpostingcomments:', error);
        });

        await fetch(Environment.BASE_URL + "/EditFile", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            File_ID: 26,
            token: token
          }),
        })
          .then(response => response.json())
          .then(async (data) => {
            console.log('GetFilesDetailssssss:', data);  
            if (!data.isException) {
              // Assuming data.result is an array of file details as described
              setcomments(data.result?.comments)
            }
            });  

   

    } catch (error) {
      console.log("error_____", error.stack);

    }
  };

  const convertUTCToLocal = (utcDateString) => {
    const localDate = new Date(utcDateString);
    return localDate.toLocaleString(); // You can format it as you like
  };

  const handlechangeteam = async (item)=>{

    setassignteam(item);
    console.log("datasedntogetuserbyteamid_____",item)
    // return false;
    await fetch(Environment.BASE_URL + "/GetUsersByTeamId",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        File_ID:item
      })
    }) .then(response => response.json())
    .then(async (data) => {

      console.log("teammember_______",data);

      if (data.result) {
        var newarray = data.result.map((item) => {
          return { label: item.First_Name, value: item.User_ID };
        })
        setassignteamMemberls(newarray);
      }
    })
  }

  const SubmitAssignTeam = async () => {
    const token = await AsyncStorage.getItem('token');
    console.log("datasedntoAssignFile_____",JSON.stringify({
      FileID:Fileid,
      SelectedTeamID:assignteam,
      SelectedTeamMemberID:assignteammember,
      // token:token,
    }))
    await fetch(Environment.BASE_URL+"/AssignFile",{
      method:'Post',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        FileID:Fileid,
        SelectedTeamID:assignteam,
        SelectedTeamMemberID:assignteammember,
        // token:token,
      })
    }).then(response => response.json())
    .then(async (data) => {

      console.log("responseAssignFile________",data);
      Alert.alert(result.result)
      // if (data.result) {
      //   var newarray = data.result.map((item) => {
      //     return { label: item.First_Name, value: item.User_ID };
      //   })
        // setassignteamMemberls(newarray);
      // }
    })

  }
 

  const updatedata = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log("datasendtoUpdateFile__________",JSON.stringify({
        File_ID: 26,
        token: token,
        File_No: Fileno,
        Serial_Number: "S123",
        Company_Name: Companyname,
        Village_Name: Address,
        Sheet_No: "Sheet123",
        Investor_First_Name: Investorfirstname,
        Investor_Middle_Name: Investormiddlename,
        Investor_Last_Name: Investorlastname,
        Investor_Full_Name: Investorfullname,
        Father_First_Name: Fatherfirstname,
        Father_Middle_Name: Fathermiddlename,
        Father_Last_Name: Fatherlastname,
        Father_Full_Name: Fatherfullname,
        Address: Address,
        Country: Country,
        State: State,
        District: District,
        PinCode: Pincode,
        ContactDetails: "123-456-7890",
        RTA_Status: Rtastatus,
        Consolidated_Address: Fulladdressconsolodation,
        Folio_Number: Folionumber,
        Dp_id: DPid,
        Investment_Type: "TypeA",
        Fees: 100.50,
        Unclaimed_shares: Unclaimedshares,
        Date_of_Transfer:ProposeddateofTransfer ,
        Praposed_Date_of_Transfer: ProposeddateofTransfer,
        Pan_Card: Pancard,
        Date_of_Birth: Dateofbirth,
        Aadhar_number: Aadharnumber,
        Nominee_Name: Nomineename,
        JointHolderName: Jointholdername,
        Market_Value: Marketvalue,
        Adv_Advance_Status: "StatusA",
        Adv_New_Address: "New Address",
        Adv_Index_Number: "Index123",
        Refrence_Number: Refrencenumber,
        Letter_Tracking_Number: Lettertrackingnumber,
        Letter_Status: Letterstatus,
        Variable_Status: Variablestatus,
        BD_Templete_View: "TemplateA",
        BD_Case_Study: Bdcasestudy,
        BD_Case_Type: Bdcasetype,
        Assign_To_BD: Assigntobd,
        BD_Status: Bdstatus,
        BD_Confidence_Level: Bdconfidencelevel,
        Tel_Nominee_Name: "Nominee A",
        Tel_Joint_Holder_Name: "Joint A",
        No_Of_Share: Noofshares,
        IEPF: Iepf,
        Physical: Physical,
        Tel_InSuspense: TelinSuspense,
        Tel_VerificationStatus: "Verified",
        Tel_No_Of_Certificate: 10,
        KYC_Compliance: "Compliant",
        Ops_CertificateNumber: Opscertificateumber,
        Ops_DistinctiveNumber: Opsdistinctivenumber,
        Ops_WorkStatus: Opsworkstatus,
        Ops_CaseType: Opscasetype,
        Ops_Stages: Opsstages,
        Ops_DividendCredited:Opsdividendcredited,
        Ops_DividendCreditedOn: "2024-01-01",
        Ops_SharesCredited: Opssharescredited,
        Ops_SharesCreditedOn: "2024-01-02",
        Ops_InvoiceIssued: Opsinvoiceissued,
        Ops_InvoiceIssuedOn: "2024-01-03",
        Ops_PaymentReceived:Opspaymentreceived,
        Ops_PaymentReceivedOn: "2024-01-04"
    }))
      await fetch(Environment.BASE_URL + "/UpdateFile", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            File_ID: 26,
            token: token,
            File_No: "F001",
            Serial_Number: "S123",
            Company_Name: "Sample Company",
            Village_Name: "Sample Village",
            Sheet_No: "Sheet123",
            Investor_First_Name: "John",
            Investor_Middle_Name: "Doe",
            Investor_Last_Name: "Smith",
            Investor_Full_Name: "John Doe Smith",
            Father_First_Name: "Robert",
            Father_Middle_Name: "William",
            Father_Last_Name: "Smith",
            Father_Full_Name: "Robert William Smith",
            Address: "123 Main St",
            Country: "CountryName",
            State: "StateName",
            District: "DistrictName",
            PinCode: "123456",
            ContactDetails: "123-456-7890",
            RTA_Status: "Active",
            Consolidated_Address: "Full Address",
            Folio_Number: "Folio123",
            Dp_id: "DP123",
            Investment_Type: "TypeA",
            Fees: 100.50,
            Unclaimed_shares: 20,
            Date_of_Transfer: "01-01-2023",
            Praposed_Date_of_Transfer: "2023-12-31",
            Pan_Card: "ABCDE1234F",
            Date_of_Birth: "1990-01-01",
            Aadhar_number: "123456789012",
            Nominee_Name: "Jane Doe",
            JointHolderName: "Jane Smith",
            Market_Value: 10000.75,
            Adv_Advance_Status: "StatusA",
            Adv_New_Address: "New Address",
            Adv_Index_Number: "Index123",
            Refrence_Number: "Ref123",
            Letter_Tracking_Number: "Track123",
            Letter_Status: "Sent",
            Variable_Status: "VarStatusA",
            BD_Templete_View: "TemplateA",
            BD_Case_Study: "CaseStudyA",
            BD_Case_Type: "TypeA",
            Assign_To_BD: "BD123",
            BD_Status: "Completed",
            BD_Confidence_Level: "High",
            Tel_Nominee_Name: "Nominee A",
            Tel_Joint_Holder_Name: "Joint A",
            No_Of_Share: 100,
            IEPF: "Yes",
            Physical: "No",
            Tel_InSuspense: "Yes",
            Tel_VerificationStatus: "Verified",
            Tel_No_Of_Certificate: 10,
            KYC_Compliance: "Compliant",
            Ops_CertificateNumber: "Cert123",
            Ops_DistinctiveNumber: "Dist123",
            Ops_WorkStatus: "Completed",
            Ops_CaseType: "TypeB",
            Ops_Stages: "Stage1",
            Ops_DividendCredited: 150.50,
            Ops_DividendCreditedOn: "2024-01-01",
            Ops_SharesCredited: 50,
            Ops_SharesCreditedOn: "2024-01-02",
            Ops_InvoiceIssued: "Yes",
            Ops_InvoiceIssuedOn: "2024-01-03",
            Ops_PaymentReceived: "Yes",
            Ops_PaymentReceivedOn: "2024-01-04"
        }),
      })
        .then(response => response.json())
        .then(async (data) => {
          console.log('UpdateFileresponse:', data);
          if (!data.isException) {
           Alert.alert(data.result);
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });



    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../Images/cms.png')}
        />
        <Text style={styles.headerTitle}>Claim My Shares</Text>
        <IconButton icon="bell" size={20} color="white" />
        <Text>
          <Icon name="person" size={30} color="white" />;
        </Text>
        <Text style={styles.headerUser}>Michaeldavis</Text>
      </View> */}

      <View style={{ padding: 10, borderColor: '#000000', borderWidth: 1, marginTop: 20, borderRadius: 10, marginBottom: 10 }}>

        <Text style={styles.sectionTitle}>ASSIGN FILE</Text>
        <View style={{ flexDirection: 'row' }}>
          <Card style={[styles.card, { width: '48%' }]}>
            <Text style={styles.cardTitle}>Assign to Team </Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={assignteam}
                style={{ height: 50, width: '100%', backgroundColor: '#ffffff', borderRadius: 10, fontSize: 10, color: 'green', }}
                mode={"dropdown"}
                placeholder={assignteam}
                // onValueChange={(item) => { setassignteammember(item) }}
                onValueChange={(items)=>{ handlechangeteam(items)}}
                >
                <Picker.Item label={assignteammember} value={assignteammember} />
                {assignteamls.map((user, index) => (
                  <Picker.Item label={user.Team_Name} value={user.Team_ID} key={index} />
                ))}


              </Picker>
            </View>

          </Card>
          <Card style={[styles.card, { marginLeft: 10, width: '48%' }]}>
            <Text style={styles.cardTitle}>Assign to Team Member</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={assignteam}
                style={{ height: 50, width: '100%', backgroundColor: '#ffffff', borderRadius: 10, fontSize: 10, color: 'green', }}
                mode={"dropdown"}
                placeholder={assignteam}
                onValueChange={(item) => { setassignteammember(item) }
                }>
                <Picker.Item label={assignteammember} value={assignteammember} />
                {assignteamMemberls.map((user, index) => (
                  <Picker.Item label={user.label} value={user.value} key={index} />
                ))}


              </Picker>
            </View>
          </Card>

        </View>
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity 
          onPress={SubmitAssignTeam}
          style={{ backgroundColor: '#162732', paddingVertical: 10, paddingHorizontal: 20, alignItems: 'center', marginBottom: 10, width: "50%", borderRadius: 10, }}>
            <Text style={styles.updateButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>

      </View>

                {/* <View style={{width:'100%',height:'20%'}}>
                <Text>Username: {Username}</Text>
                    {imageBase64 ? (
                      <Image source={{ uri: Imageurl }}  style={{height:200,width:200,borderRadius:10,backgroundColor:'green'}} />
                    ) : (
                      <Text>Loading image...</Text>
                    )}
                </View> */}

      {/* <TouchableOpacity style={{ backgroundColor: '#162732', paddingVertical: 10, paddingHorizontal: 20, alignItems: 'center', marginBottom: 10 }}>
        <Text style={styles.updateButtonText}>UPDATE DATA</Text>
      </TouchableOpacity> */}
      <View style={{ padding: 10, borderColor: '#000000', borderWidth: 1, marginTop: 20, borderRadius: 10, marginBottom: 10, zIndex: 0 }}>
        <TouchableOpacity style={styles.updateButton} onPress={togglePersonalModal}>
          <Text style={styles.updateButtonText}>Personal Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.updateButton} onPress={toggleBDModal}>
          <Text style={styles.updateButtonText}>BD Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.updateButton} onPress={toggleTeleModal}>
          <Text style={styles.updateButtonText}>Tele & Letter Team Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.updateButton} onPress={toggleOPModal}>
          <Text style={styles.updateButtonText}>Operational Details</Text>
        </TouchableOpacity>
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity 
          onPress={updatedata}
          style={{ backgroundColor: '#162732', paddingVertical: 10, paddingHorizontal: 20, alignItems: 'center', marginBottom: 10, width: "50%", borderRadius: 10, }}>
            <Text style={styles.updateButtonText}>UPDATE DATA</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View style={{ padding: 10, borderColor: '#000000', borderWidth: 1, marginTop: 20, borderRadius: 10, marginBottom: 10 }}>
        <Text style={[styles.cardTitle, { height: 30, backgroundColor: "#162732", width: '100%', color: "white", marginBottom: 5, marginTop: 5, borderRadius: 5 }]}>KYC Documents</Text>
        <View style={styles.dropdownContainer}>
          {/* <DropDownPicker
            open={open}
            value={documentType}
            items={documentTypes}
            setOpen={setOpen}
            setValue={setDocumentType}
            setItems={() => documentTypes}
            containerStyle={styles.largePicker}
            textStyle={styles.largePickerText}
          /> */}

          <Picker
            selectedValue={documentType}
            style={{ height: 50, width: '50%', backgroundColor: '#bcbcbc', borderRadius: 20, fontSize: 10, color: 'green', }}
            mode={"dropdown"}
            placeholder={documentType}
            onValueChange={(item) => { setdocumentType(item) }
            }>
            <Picker.Item label={assignteammember} value={assignteammember} />
            {documentTypes.map((user, index) => (
              <Picker.Item label={user.label} value={user.label} key={index} />
            ))}


          </Picker>

          {file ?
            <View style={{ marginLeft: 20, marginTop: 10 }}>
              <Text style={{ color: 'blue', marginBottom: 1 }}>{file.name}</Text>
            </View> :
            <TouchableOpacity style={[styles.button, { marginLeft: 10 }]} onPress={chooseFile}>
              <Text style={styles.buttonText}>Choose File</Text>
            </TouchableOpacity>}
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 10 }}>

          <TouchableOpacity style={[styles.button, { flex: 2, zIndex: 0 }]} onPress={uploadFile}>
            <Text style={styles.buttonText}>Upload</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tableHeader}>
          <View style={{ borderBottomWidth: 1, flexDirection: 'row', borderColor: 'white', padding: 5, width: '100%' }}>
            <Text style={styles.headerCell}>File ID</Text>
            <Text style={{ width: '50%', color: 'white', marginLeft: 10 }}>Client Master List</Text>

          </View>
          <View style={{ borderBottomWidth: 1, flexDirection: 'row', borderColor: 'white', padding: 5, width: '100%' }}>
            <Text style={styles.headerCell}>Aadhar Card</Text>
            <Text style={{ width: '50%', color: 'white', marginLeft: 10 }}>Client Master List</Text>

          </View>
          <View style={{ borderBottomWidth: 1, flexDirection: 'row', borderColor: 'white', padding: 5, width: '100%' }}>
            <Text style={styles.headerCell}>Pan Card</Text>
            <Text style={{ width: '50%', color: 'white', marginLeft: 10 }}>Client Master List</Text>

          </View>
          <View style={{ borderBottomWidth: 1, flexDirection: 'row', borderColor: 'white', padding: 5, width: '100%' }}>
            <Text style={styles.headerCell}>Agreement Copy</Text>
            <Text style={{ width: '50%', color: 'white', marginLeft: 10 }}>Client Master List</Text>

          </View>
          <View style={{ borderBottomWidth: 1, flexDirection: 'row', borderColor: 'white', padding: 5, width: '100%' }}>
            <Text style={styles.headerCell}>Client Master List</Text>
            <Text style={{ width: '50%', color: 'white', marginLeft: 10 }}>Client Master List</Text>

          </View>
          <View style={{ borderBottomWidth: 1, flexDirection: 'row', borderColor: 'white', padding: 5, width: '100%' }}>
            <Text style={styles.headerCell}>Cancel Cheque </Text>
            <Text style={{ width: '50%', color: 'white', marginLeft: 10 }}>Client Master List</Text>

          </View>

        </View>

      </View>


      <View style={{ padding: 10, borderColor: '#000000', borderWidth: 1, marginTop: 20, borderRadius: 10, marginBottom: 10 }}>
        <TouchableOpacity onPress={toggleCommentModal}styles={{height:'50%'}}>
          <Text style={[styles.cardTitle, { backgroundColor: "#162732", width: '100%',height:'30%', color: "white", marginBottom: 5,marginTop:5, borderRadius: 5 }]}>Comments</Text>
        </TouchableOpacity>
      </View>



      <Modal
        animationType="slide"
        transparent={true}
        visible={isPersonalModalVisible}
        onRequestClose={togglePersonalModal}
      >
        <View style={styles.modalContainer}>

          <ScrollView style={[styles.modalContent, { minHeight: '80%', maxHeight: '80%', width: '95%' }]}>
            <Text style={[styles.modalTitle, { textAlign: 'center' }]}>Personal Details</Text>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>File ID:</Text>
              <TextInput style={styles.modalInput}
                placeholder="Enter Employee ID"
                value={Fileid}
                placeholderTextColor="#FFFFFF"
                onChangeText={(text)=>{setFileid(text)}}

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>File No:</Text>
              <TextInput style={styles.modalInput}
                placeholder="Enter Employee Name"
                value={Fileno}
                placeholderTextColor="#FFFFFF"
                onChangeText={(text)=>{setFileno(text)}}


              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Company Name</Text>
              <TextInput style={styles.modalInput} 
              value={Companyname}
              placeholder="Enter Email Address"
                placeholderTextColor="#FFFFFF"
                onChangeText={(text)=>{setCompanyname(text)}}


              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Investor First Name:</Text>
              <TextInput style={styles.modalInput}
              value={Investorfirstname}
               placeholder="Enter Mobile Number"
                placeholderTextColor="#FFFFFF"
                onChangeText={(text)=>{setInvestorfirstname(text)}}

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Investor Middle Name</Text>
              <TextInput style={styles.modalInput} 
                    value={Investormiddlename}
                    placeholder="Enter Employee Name"
                      placeholderTextColor="#FFFFFF"
                      onChangeText={(text)=>{setInvestormiddlename(text)}}


              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Investor Last Name</Text>
              <TextInput style={styles.modalInput} 
              value={Investorlastname}
              placeholder="Enter Employee Name"
                placeholderTextColor="#FFFFFF"
                onChangeText={(text)=>{setInvestorlastname(text)}}

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Investor Full Name</Text>
              <TextInput style={styles.modalInput}
                        value={Investorfullname}
                        placeholder="Enter Employee Name"
                      placeholderTextColor="#FFFFFF"
                      onChangeText={(text)=>{setInvestorfullname(text)}}


              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Father First Name</Text>
              <TextInput style={styles.modalInput}
                        value={Fatherfirstname}
                        placeholder="Enter Employee Name"
                        placeholderTextColor="#FFFFFF"
                        onChangeText={(text)=>{setFatherfirstname(text)}}


              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Father Middle Name</Text>
              <TextInput style={styles.modalInput} 
                 value={Fathermiddlename}
              placeholder="Enter Employee Name"
                placeholderTextColor="#FFFFFF"
                onChangeText={(text)=>{setFathermiddlename(text)}}


              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Father Last Name</Text>
              <TextInput style={styles.modalInput} 
                value={Fatherlastname}
                 placeholder="Enter Employee Name"
                placeholderTextColor="#FFFFFF"
                onChangeText={(text)=>{setFatherlastname(text)}}


              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Father Full Name</Text>
              <TextInput style={styles.modalInput} 
              placeholder="Enter Employee Name"
              value={Fatherfullname}
                placeholderTextColor="#FFFFFF"
                onChangeText={(text)=>{setFatherfullname(text)}}


              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Address</Text>
              <TextInput style={styles.modalInput}
              value={Address}
               placeholder="Enter Employee Name"
                placeholderTextColor="#FFFFFF"
                onChangeText={(text)=>{setAddress(text)}}


              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Country</Text>
              <TextInput style={styles.modalInput}
              value={Country}
              placeholder="Enter Employee Name"
                placeholderTextColor="#FFFFFF"
                onChangeText={(text)=>{setCountry(text)}}


              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>State</Text>
              <TextInput style={styles.modalInput} 
              value={State}
              placeholder="Enter Employee Name"
                placeholderTextColor="#FFFFFF"
                onChangeText={(text)=>{setState(text)}}


              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>District</Text>
              <TextInput style={styles.modalInput} 
              value={District}
              placeholder="Enter Employee Name"
                placeholderTextColor="#FFFFFF"
                onChangeText={(text)=>{setDistrict(text)}}


              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Pin Code</Text>
              <TextInput style={styles.modalInput}
              value={Pincode}
               placeholder="Enter Employee Name"
                placeholderTextColor="#FFFFFF"
                onChangeText={(text)=>{setPincode(text)}}


              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Full Address Consolodation</Text>
              <TextInput style={styles.modalInput}
              value={Fulladdressconsolodation}
              placeholder="Enter Employee Name"
                placeholderTextColor="#FFFFFF"
                onChangeText={(text)=>{setFulladdressconsolodation(text)}}


              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Folio Number</Text>
              <TextInput style={styles.modalInput} 
              value={Folionumber}
              placeholder="Enter Employee Name"
                placeholderTextColor="#FFFFFF"
                onChangeText={(text)=>{setFolionumber(text)}}


              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>DP ID</Text>
              <TextInput style={styles.modalInput}
              value={DPid}
               placeholder="Enter Employee Name"
                placeholderTextColor="#FFFFFF"
                onChangeText={(text)=>{setDPid(text)}}


              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Unclaimed shares</Text>
              <TextInput style={styles.modalInput}
              value={Unclaimedshares}
               placeholder="Enter Employee Name"
                placeholderTextColor="#FFFFFF"
                onChangeText={(text)=>{setUnclaimedshares(text)}}


              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Proposed date of Transfer</Text>
              <TextInput style={styles.modalInput} 
              value={ProposeddateofTransfer}
              placeholder="Enter Employee Name"
                placeholderTextColor="#FFFFFF"
                onChangeText={(text)=>{setProposeddateofTransfer(text)}}


              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>PanCard</Text>
              <TextInput style={styles.modalInput} 
              value={Pancard}
              placeholder="Enter Employee Name"
                placeholderTextColor="#FFFFFF"
                onChangeText={(text)=>{setPancard(text)}}


              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Date of Birth</Text>
              <TextInput style={styles.modalInput}
              value={Dateofbirth}
              placeholder="Enter Employee Name"
                placeholderTextColor="#FFFFFF"
                onChangeText={(text)=>{setDateofbirth(text)}}


              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Aadhar number</Text>
              <TextInput style={styles.modalInput} 
              value={Aadharnumber}
              placeholder="Enter Employee Name"
                placeholderTextColor="#FFFFFF"
                onChangeText={(text)=>{setAadharnumber(text)}}


              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Nominee name</Text>
              <TextInput style={styles.modalInput}
              value={Nomineename}
               placeholder="Enter Employee Name"
                placeholderTextColor="#FFFFFF"
                onChangeText={(text)=>{setNomineename(text)}}


              />
            </View>
      
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Joint holder name</Text>
              <TextInput style={styles.modalInput}
              value={Jointholdername}
               placeholder="Enter Employee Name"
                placeholderTextColor="#FFFFFF"
                onChangeText={(text)=>{setJointholdername(text)}}


              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Market value</Text>
              <TextInput style={styles.modalInput} 
              value={Marketvalue}
              placeholder="Enter Employee Name"
                placeholderTextColor="#FFFFFF"
                onChangeText={(text)=>{setMarketvalue(text)}}


              />
            </View>

            <TouchableOpacity style={styles.modalButton} onPress={togglePersonalModal}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isBDModalVisible}
        onRequestClose={toggleBDModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>BD Details</Text>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Bd Case Study:</Text>
              <TextInput style={[styles.modalInput, { backgroundColor: 'gray' }]}
                placeholderTextColor="#FFFFFF"
                editable={false}
                value={Bdcasestudy}
                onChangeText={(text)=>{setBdcasestudy(text)}}


              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>BD Case Type:</Text>
              <TextInput style={[styles.modalInput, { backgroundColor: 'gray' }]}
                placeholderTextColor="#FFFFFF"
                editable={false}
                value={Bdcasetype}
                onChangeText={(text)=>{setBdcasetype(text)}}

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>BD Status:</Text>
              <DropDownPicker
                open={open}
                value={Bdstatus}
                items={BdstatusList}
                setOpen={setOpen}
                setValue={setBdstatus}
                setItems={setBdstatusList}
                containerStyle={styles.picker}
              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>BD Confidence Level:</Text>
              <TextInput style={[styles.modalInput, { backgroundColor: 'gray' }]}
                placeholderTextColor="#FFFFFF"
                editable={false}
                value={Bdconfidencelevel}
                onChangeText={(text)=>{setBdconfidencelevel(text)}}

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Assign To BD:</Text>
              <TextInput style={[styles.modalInput, { backgroundColor: 'gray' }]}
                placeholderTextColor="#FFFFFF"
                value={Assigntobd}
                editable={false}
                onChangeText={(text)=>{setAssigntobd(text)}}


              />
            </View>
            <TouchableOpacity style={styles.modalButton} onPress={toggleBDModal}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isTeleModalVisible}
        onRequestClose={toggleTeleModal}
      >
        <View style={styles.modalContainer}>

          <ScrollView style={[styles.modalContent, { width: '95%', minHeight: "90%", maxHeight: "90%" }]}>
            <Text style={styles.modalTitle}>Tele&Letter Team Details</Text>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>RTA_Status:</Text>
              <TextInput style={[styles.modalInput, { backgroundColor: '#bcbcbc' }]}
                placeholderTextColor="#FFFFFF"
                editable={false}
                value={Rtastatus}
                onChangeText={(text)=>{setRtastatus(text)}}

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>No of Shares:</Text>
              <TextInput style={[styles.modalInput, { backgroundColor: '#bcbcbc' }]}
                placeholderTextColor="#FFFFFF"
                editable={false}
                value={Noofshares}
                onChangeText={(text)=>{setNoofshares(text)}}


              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>IEPF:</Text>
              <TextInput style={[styles.modalInput, { backgroundColor: '#bcbcbc' }]}
                placeholderTextColor="#FFFFFF"
                editable={false}
                value={Iepf}
                onChangeText={(text)=>{setIepf(text)}}

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Physical:</Text>
              <TextInput style={[styles.modalInput, { backgroundColor: '#bcbcbc' }]}
                placeholderTextColor="#FFFFFF"
                editable={false}
                value={Physical}
                onChangeText={(text)=>{setPhysical(text)}}

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Tel InSuspense:</Text>
              <TextInput style={[styles.modalInput, { backgroundColor: '#bcbcbc' }]}
                placeholderTextColor="#FFFFFF"
                editable={false}
                value={TelinSuspense}
                onChangeText={(text)=>{setTelinSuspense(text)}}

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Refrence Number:</Text>
              <TextInput style={[styles.modalInput, { backgroundColor: '#bcbcbc' }]}
                placeholderTextColor="#FFFFFF"
                editable={false}
                value={Refrencenumber}
                onChangeText={(text)=>{setRefrencenumber(text)}}

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Letter Tracking Number:</Text>
              <TextInput style={[styles.modalInput, { backgroundColor: '#bcbcbc' }]}
                placeholderTextColor="#FFFFFF"
                editable={false}
                value={Lettertrackingnumber}
                onChangeText={(text)=>{setLettertrackingnumber(text)}}

              />
            </View>


            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Letter Status</Text>
              <TextInput style={[styles.modalInput, { backgroundColor: '#bcbcbc' }]}
                placeholderTextColor="#FFFFFF"
                editable={false}
                value={Letterstatus}
                onChangeText={(text)=>{setLetterstatus(text)}}

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Variable Status</Text>
              <TextInput style={[styles.modalInput, { backgroundColor: '#bcbcbc' }]}
                placeholderTextColor="#FFFFFF"
                editable={false}
                value={Variablestatus}
                onChangeText={(text)=>{setVariablestatus(text)}}

              />
            </View>


            <TouchableOpacity style={styles.modalButton} onPress={toggleTeleModal}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOPModalVisible}
        onRequestClose={toggleOPModal}
      >
        <View style={styles.modalContainer}>
          <ScrollView style={[styles.modalContent, { width: '95%', minHeight: "90%", maxHeight: "90%" }]}>
            <Text style={styles.modalTitle}>Operation Details</Text>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Ops Certificate Number:</Text>
              <TextInput style={[styles.modalInput, { backgroundColor: '#bcbcbc' }]}
                placeholderTextColor="#FFFFFF"
                editable={false}
                value={Opscertificateumber}
                onChangeText={(text)=>{setOpscertificateumber(text)}}

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Ops Distinctive Number:</Text>
              <TextInput style={[styles.modalInput, { backgroundColor: '#bcbcbc' }]}
                placeholderTextColor="#FFFFFF"
                editable={false}
                value={Opsdistinctivenumber}
                onChangeText={(text)=>{setOpsdistinctivenumber(text)}}

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Ops Work Status:</Text>
              <TextInput style={[styles.modalInput, { backgroundColor: '#bcbcbc' }]}
                placeholderTextColor="#FFFFFF"
                editable={false}
                value={Opsworkstatus}
                onChangeText={(text)=>{setOpsworkstatus(text)}}

              />
            </View>
           
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Ops Case Type:</Text>
              <TextInput style={[styles.modalInput, { backgroundColor: '#bcbcbc' }]}
                placeholderTextColor="#FFFFFF"
                editable={false}
                value={Opscasetype}
                onChangeText={(text)=>{setOpscasetype(text)}}

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Ops_Stages:</Text>
              <TextInput style={[styles.modalInput, { backgroundColor: '#bcbcbc' }]}
                placeholderTextColor="#FFFFFF"
                editable={false}
                value={Opsstages}
                onChangeText={(text)=>{setOpsstages(text)}}

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Ops Dividend Credited:</Text>
              <TextInput style={[styles.modalInput, { backgroundColor: '#bcbcbc' }]}
                placeholderTextColor="#FFFFFF"
                editable={false}
                value={Opsdividendcredited}
                onChangeText={(text)=>{setOpsdividendcredited(text)}}

              />
            </View>


            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Ops Shares Credited</Text>
              <TextInput style={[styles.modalInput, { backgroundColor: '#bcbcbc' }]}
                placeholderTextColor="#FFFFFF"
                editable={false}
                value={Opssharescredited}
                onChangeText={(text)=>{setOpssharescredited(text)}}

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Ops_InvoiceIssued</Text>
              <TextInput style={[styles.modalInput, { backgroundColor: '#bcbcbc' }]}
                placeholderTextColor="#FFFFFF"
                editable={false}
                value={Opsinvoiceissued}
                onChangeText={(text)=>{setOpsinvoiceissued(text)}}

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Ops Payment Received</Text>
              <TextInput style={[styles.modalInput, { backgroundColor: '#bcbcbc' }]}
                placeholderTextColor="#FFFFFF"
                editable={false}
                value={Opspaymentreceived}
                onChangeText={(text)=>{setOpspaymentreceived(text)}}

              />
            </View>


            <TouchableOpacity style={styles.modalButton} onPress={toggleOPModal}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={iscommentmodalvisible}
        onRequestClose={toggleCommentModal}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent,{width:'95%'}]}>
            <Text style={styles.modalTitle}>Comments</Text>

            {/* Comments Section */}
            <View style={{
              minHeight: 50,
              width: '100%',
              // backgroundColor:  '#ffffff',
              alignSelf: 'center',
              borderRadius: 5,
              borderColor: 'gray',
              borderWidth: 1,
              padding: '2%',
            }}>
              {/* <View style={{ backgroundColor: '#EF6A32', height: '10%', flexDirection: 'row', padding: 5, borderTopEndRadius: 5, borderTopStartRadius: 5 }}>
          <Text style={styles.modalTitle}>{('Comments')}</Text>

          <TouchableOpacity style={{ marginTop: '2%', marginLeft: '10%' }} onPress={() => toggleOPModal()}>
            <Icon name="close" size={24} color="white" />
          </TouchableOpacity>
        </View> */}
              <ScrollView
                style={{
                  minHeight: 300,
                  maxHeight: 400,
                  width: '100%',
                  // backgroundColor:  '#ffffff',
                  alignSelf: 'center',
                  borderRadius: 5,
                  marginTop: 10,
                  borderBottomWidth: 1,
                  borderColor: 'gray',
                }}
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={true}
              >
                <View style={{ marginLeft: 5, marginBottom: 10, marginTop: 10 }}>
                  {comments.map((comment, index) => {
                    let currentUser = null;
                    const isSameUser = comment.created_by === Username;
                    const direction = isSameUser ? 'row-reverse' : 'row';

                    return (
                      <View key={index} style={{ flexDirection: direction, marginBottom: 10 }}>
                        <View style={{ borderRadius: 30, width: 30, height: 30, backgroundColor: isSameUser ? "#f6b26b" : '#e6edff' }}>
                          <Text style={{ paddingLeft: 10, paddingTop: 5, color: '#4700bb' }}>{comment.created_by.slice(0,1)}</Text>
                        </View>
                        <View style={{ backgroundColor: '#d9d9d9', width: '85%', marginLeft: 5, marginRight: 5, borderRadius: 5, padding: 5, position: 'relative' }}>
                          <Text style={{ position: 'absolute', top: 0, ...(isSameUser ? { right: 5 } : { left: 5 }), color: '#2c2929', fontSize: 10, fontWeight: 'bold', marginTop: 6 }}>{comment.created_by}</Text>
                          <Text style={{ flexWrap: 'wrap', flex: 1, marginLeft: isSameUser ? 10 : 0, color: '#2c2727', marginTop: 15 }}>{comment.CommentText}</Text>
                          <Text style={{ flex: 2, marginLeft: '70%', color: '#2c2929', fontSize: 8 }}>
                            {/* {comment.created_at} */}
                            {convertUTCToLocal(comment.created_at)}
                            </Text>
                        </View>

                      </View>
                    );
                  })}
                </View>
                {/* Replace with your comments logic here */}
              </ScrollView>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // marginTop: '5%',
                  marginLeft: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    // borderColor:'black',borderWidth:1,
                    width: '70%',
                    alignSelf: 'center',
                    marginLeft: 10,
                  }}>
                  <TextInput
                    style={[styles.inputBox4, { color: 'white', padding: 10, }]}
                    // style={{color:this.state.darkmode ?'white':'#343A40',padding:10,backgroundColor:'gray'}}
                    placeholder={('Enter Your Comment...')}
                    placeholderTextColor="white"
                    editable={true}
                    name="sectioncomment"
                    maxLength={250}
                    onChangeText={text => setcomment(text)}
                    value={comment}
                  />

                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    width: '20%',
                    alignSelf: 'center',
                    marginRight: 20,
                    marginBottom: 0,
                    marginTop: 5,
                  }}>

                  <TouchableOpacity
                    onPress={handleCommentSectionSubmit}>
                    <Icon name="send" size={24} color="#8dbfed" />
                  </TouchableOpacity>
                </View>
              </View>


            </View>
            {/* End Comments Section */}

            <TouchableOpacity style={styles.modalButton} onPress={toggleCommentModal}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#162732',
    padding: 10,
    justifyContent: 'space-between',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  headerTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  headerUser: {
    fontSize: 16,
    color: 'white',
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  card: {
    padding: 10,
    marginVertical: 10,
    elevation: 5,
    borderWidth: 0.2,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  pickerContainer: {
    marginBottom: 10,
    zIndex: 10000
  },
  // picker: {
  //   height: 40,
  // },
  updateButton: {
    backgroundColor: '#78B7FB',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    zIndex: 0
    // elevation: 5,
  },
  updateButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  kycHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  fileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
  },
  fileButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 5,
  },
  dropdownContainer: {
    flex: 1,
    marginLeft: 10,
    width: '100%',
    // width:70,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    zIndex: 0
  },
  largePicker: {
    height: 20,
    width: "50%",
    marginBottom: 20,
    zIndex: 1000,
  },
  largePickerText: {
    fontSize: 16,
    zIndex: 1000
  },
  picker: {
    height: 20,
    marginBottom: 20,
    zIndex: 1000
  },
  entries: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  search: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 5,
    marginRight: 10,
  },
  pickerEntries: {
    height: 40,
    width: 80,
  },
  entriesText: {
    marginLeft: 5,
  },
  tableHeader: {
    flexDirection: 'column',
    backgroundColor: '#162732',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'flex-start',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    color: 'white',
    width: '40%',
    borderRightWidth: 1,
    borderColor: 'white'


  },
  button: {
    backgroundColor: '#162732',
    padding: 10,
    borderRadius: 5,
    width: '35%', marginBottom: 5
    //  marginVertical: 10,
  },
  cell: {
    flex: 1,
  },
  verticalDivider: {
    width: 1,
    height: '100%',
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  commentUser: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#162732',
    borderRadius: 10,
    padding: 20,
    // alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'white'
  },
  modalItem: {
    width: '100%',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  modalLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white'
  },
  modalInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    color: '#162732',
    backgroundColor: 'white',
    width: '100%',
  },
  modalButton: {
    // backgroundColor: '#162732',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AddFile;
