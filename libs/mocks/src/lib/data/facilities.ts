export const facilities = [
  {
    info: {
      name: 'Triumph Group: Wellington',
      about:
        'Provides MRO and manufacturing services for airframe and engine accessories, for commercial, regional, military and general aviation aircraft.',
      size: 50,
      logoUrl: 'company-logo',
      email: 'info@triumphgroup.com',
      website: 'www.triumphgroup.com',
      linkedIn: 'https://www.linkedin.com/company/triumph-group',
      phoneNumber: '+1234567890',
    },
    location: {
      street: '411 N West Rd',
      country: 'USA',
      stateProv: 'KS',
      city: 'Wellington',
      postalCode: '67152',
    },
    code: 'TGI-WEKS',
    type: 'MRO',
    reps: [
      {
        email: 'jordan@aerotrax.org',
        firstName: 'Jordan',
        lastName: 'Peterson',
        department: 'Sales',
        title: 'Sales Manager',
        phoneNumber: '+639175652349',
      },
    ],
    registrations: {
      ein: '1XD25',
      duns: '958361438',
      cageCode: '546-10-7724',
    },
    // capabilities: ['53b7c43f-47e7-422b-ad1f-9c518187b3ba'],
    certifications: [
      { code: 'ANOR321N', description: 'FAA Repair Station' },
      { code: '145.5135', description: 'EASA Repair Station' },
      { code: 'F03300626', description: 'CAAC Repair Station' },
    ],
    // inventory: ['490a42ae-67c5-4049-94fd-80e66766688b'],
    scoreCard: [
      {
        reliability: { pct: '80%', defects: 5 },
        quality: { pct: '66%', errors: 5 },
        delivery: { pct: '73%', late: 5 },
        transactions: 20,
      },
    ],
    // orders: [{
    //   id: '442e6115-4e57-4f15-98cf-d09b03eb0b9b',
    //   purchaseOrder: '24000',
    //   workOrder: '00024',
    //   value: 10000,
    //   customer: 'ATX-AIR',
    //   supplier: 'ATX-MRO',
    //   status: 'CLOSED',
    //   orderResponse: 'ACCEPTED',
    //   part: [{
    //     id: '8514535e-728d-476e-9407-c9c0bfe828cb',
    //     traceHistory: [{
    //       poId: 'fea43609-28cb-48e0-9799-0403e4528dc7',
    //       documents: null
    //     }]
    //   }],
    //   // REMOVE ITEM
    //   // item: [],
    //   // workRequired
    //   workType: ['INSPECTION'],
    //   // instructions
    //   workInstructions: [{
    //     name: 'Instruction',
    //     url: '460C0B496EAC70CA906EC2E19449D1D99E1437FDFC2427E32E774FCE24B0FDC6',
    //     mimeType: 'pdf',
    //   }],
    //   details: {
    //     releaseRequired: ['FAA'],
    //     digitalSignature: true,
    //     exchange: true,
    //     servicableParts: true,
    //     PMAorDER: true,
    //     serializedTrackingNonRotables: true,
    //     includeChecksum: true,
    //     inspectionRequired: true,
    //     returnScraps: true,
    //     airworthynessDirective: true,
    //     tagRequirements: 'OEM',
    //     preferredLogisticsProvider: 'FedEx',
    //     llpUpdate: ['TT_HOURS','TT_CYCLES'],
    //   },
    //   documentInstructions: {
    //     release: [{
    //       id: '7f833a2f-fd87-46bb-ae95-f456ac7b956c',
    //       formName: 'FAA Form 8130',
    //       // array of instructions
    //       instructions: [{
    //         block: '12',
    //         text: 'POLICY SHEET NUMBER, REv, and DATE - List OSA’s as required.  Review all Policy Sheets and OSAs for any specific line item requirements for reporting.  Include in the appropriate section that follows.\nEO/s and FCD’s (fleet campaign directive) listed in S/O must be listed in Block 12. All EO’s and FCD’s by number, revision level, and date exactly as on the S/O should be noted as “Has Been Complied with”, “Has Previously Complied With”, and when/how determined, “Not Applicable” and why, or “Not Complied with” and why.\nAll Manuals. Revision and Dates on Manuals.\nAll ADs by number, revision level, and date should be noted as “Has Been Complied with”, “Has Previously Complied With”, and when/how determined, “Not Applicable” and why, or “Not Complied with” and why.\nOnly list S/B’s that are on the service order and compiled with or if required by Policy Sheet to be listed in 8130.  All S/B’s reported by number, revision level, and date should be noted as “Has Been Complied with”, “Has Previously Complied With”, and when/how determined, “Not Applicable” and why, or “Not Complied with” and why.'
    //       }],
    //       notes: 'Each section indicated will be included in Block 12 of the ARC separately in block format. A space shall probe provided between each section to allow separation of information reported. In the event the information cannot be contained within Block 12, then a separate sheet, or continuation sheet shall be utilized. Completion of Block 12 in this format constitutes compliance with the intent of FAR 43.9 and the FAR 121 maintenance program.  This format is subject to change as internal requirements dictate'
    //     }],
    //     serviceReport: [''],
    //     quoteInstruction: ['']
    //   },
    //   // workflowDocuments:
    //   workflow: [{
    //     step: 'EVALUATING',
    //     dtViewed: null,
    //     dtEstimatedComplete: '2022-04-15T05:00:00',
    //     dtCompleted: '2022-04-13T15:34:30.321',
    //     performance: 'EARLY',
    //     status: 'COMPLETE',
    //     statusLog: [{
    //       state: 'COMPLETED',
    //       createdBy: 'Luca Mellor',
    //       dtCreated: '2022-04-13T15:34:30.321',
    //     }],
    //     // ADD DOCUMENTS
    //     documents: [{
    //       id: 'dfcc2e31-0f32-4213-b6c5-da790a1e4f71',
    //       name: 'Shop Floor Pictures for Serial No. 13554',
    //       url: 'http://s3.amazonaws.com/ebac63ff-92ea-4ee3-a203-6448e786390a/',
    //       mimeType: 'png',
    //       hash: '44806BA9FDE1518633ABB0294F1CA87AB1C053ACA2529C7C7ADBDABD4813D8D6',
    //       dtUploaded: '2022-04-13T15:34:30.321',
    //     }]
    //   }, {
    //     step: 'QUOTE',
    //     dtViewed: null,
    //     dtEstimatedComplete: '2022-04-15T05:00:00',
    //     dtCompleted: '2022-04-13T15:34:49.991',
    //     performance: 'EARLY',
    //     status: 'COMPLETE',
    //     statusLog: [{
    //       state: 'SENT',
    //       createdBy: 'Luca Mellor',
    //       dtCreated: '2022-04-13T15:34:49.991',
    //     },{
    //       state: 'ACCEPTED',
    //       createdBy: 'David Bettenhausen',
    //       dtCreated: '2022-04-13T15:50:21.17',
    //     }],
    //     documents: [{
    //       id: '745d0aab-22f1-4051-b4fa-cdfa0e1ed7c8',
    //       name: 'D18E7B34798DC721A2D31DDD671F12F3ACB698803FDF1A881DDFDC1CE90F1778',
    //       url: 'http://s3.amazonaws.com/ebac63ff-92ea-4ee3-a203-6448e786390a/',
    //       mimeType: 'png',
    //       hash: 'D18E7B34798DC721A2D31DDD671F12F3ACB698803FDF1A881DDFDC1CE90F1778',
    //       dtUploaded: '2022-04-13T15:34:49.991'
    //     }]
    //   }, {
    //     step: 'WORK',
    //     dtViewed: false,
    //     dtEstimatedComplete: '2022-04-20T05:00:00',
    //     dtCompleted: '2022-04-13T15:57:55.516',
    //     performance: 'EARLY',
    //     status: 'COMPLETE',
    //     statusLog: [{
    //       state: 'COMPLETED',
    //       createdBy: 'Luca Mellor',
    //       dtCreated: '2022-04-13T15:51:06.897',
    //     },{
    //       state: 'ACCEPTED',
    //       createdBy: 'David Bettenhausen',
    //       dtCreated: '2022-04-13T15:57:55.516',
    //     }],
    //     documents: [{
    //       id: '66dda2d7-1a21-4bfe-8360-3d642cde0bf0',
    //       name: 'Service Report for Serial No. 13612',
    //       url: 'http://s3.amazonaws.com/ebac63ff-92ea-4ee3-a203-6448e786390a/',
    //       mimeType: 'png',
    //       hash: 'B09186A0B25BF48E4D3F6E20C43E6438EB75B8407324494B5FD16725FA8FEFD5',
    //       dtUploaded: '2022-04-13T15:51:06.897',
    //     }]
    //   }, {
    //     step: 'RELEASE',
    //     dtViewed: false,
    //     dtEstimatedComplete: '2022-04-20T05:00:00',
    //     dtCompleted: '2022-04-13T16:07:09.047',
    //     performance: 'EARLY',
    //     status: 'COMPLETE',
    //     statusLog: [{
    //       state: 'COMPLETED',
    //       createdBy: 'Luca Mellor',
    //       dtCreated: '2022-04-13T16:07:09.047',
    //     },{
    //       state: 'ACCEPTED',
    //       createdBy: 'David Bettenhausen',
    //       dtCreated: '2022-04-13T16:07:09.052',
    //     }],
    //     documents: [{
    //       id: 'dcc2205c-8556-4b79-b65d-e86c775dbafd',
    //       name: 'FAA Form 8130 for Serial No. 13656',
    //       url: 'http://s3.amazonaws.com/ebac63ff-92ea-4ee3-a203-6448e786390a/',
    //       mimeType: 'png',
    //       hash: '7CB876BA0DC974012C19EB5EE73D5EF769B7C3D696B73F77132FD606D66B28EA',
    //       dtUploaded: '2022-04-13T16:06:59.688',
    //     }]
    //   }, {
    //     step: 'SHIP',
    //     dtViewed: false,
    //     dtEstimatedComplete: '2022-04-21T05:00:00',
    //     dtCompleted: '2022-04-13T16:07:34.687',
    //     performance: 'EARLY',
    //     status: 'COMPLETE',
    //     statusLog: [{
    //       state: 'COMPLETED',
    //       createdBy: 'Luca Mellor',
    //       dtCreated: '2022-04-13T16:07:34.687',
    //     }],
    //     documents: [{
    //       id: '9558085f-6f72-4dea-b5f7-f0e224fb47af',
    //       name: 'Shipping Ticket',
    //       url: 'http://s3.amazonaws.com/ebac63ff-92ea-4ee3-a203-6448e786390a/',
    //       mimeType: 'png',
    //       hash: '4934B81D14C0391CAB841275CC5E2A43EF390ACDC24EC1864AC7E13ADDA3A004',
    //       dtUploaded: '2022-04-13T16:07:34.687',
    //     }]
    //   }, {
    //     step: 'INVOICE',
    //     dtViewed: false,
    //     dtEstimatedComplete: '2022-04-21T05:00:00',
    //     dtCompleted: '2022-04-13T16:07:41.596',
    //     performance: 'EARLY',
    //     status: 'COMPLETE',
    //     statusLog: [{
    //       state: 'COMPLETED',
    //       createdBy: 'Luca Mellor',
    //       dtCreated: '2022-04-13T16:07:41.596',
    //     }],
    //     documents: [{
    //       id: 'fd732b73-89a9-46b0-a6c8-ef56f7f33700',
    //       name: 'Invoice',
    //       url: 'http://s3.amazonaws.com/ebac63ff-92ea-4ee3-a203-6448e786390a/',
    //       mimeType: 'png',
    //       hash: '2987CF172A3293B5E4F7941EB293F4813E2AEE2A217549B90D9F0AD6FA84AC52',
    //       dtUploaded: '2022-04-13T16:07:41.596',
    //     }]
    //   }, {
    //     step: 'ADDITIONAL',
    //     dtViewed: false,
    //     dtEstimatedComplete: null,
    //     performance: 'EARLY',
    //     status: 'COMPLETE',
    //     dtCompleted: '2022-04-13T15:48:41.038',
    //     statusLog: [{
    //       state: 'COMPLETED',
    //       createdBy: 'Luca Mellor',
    //       dtCreated: '2022-04-13T15:48:41.038',
    //     }],
    //     documents: [{
    //       id: 'd2c76302-1ee2-4cc7-9caa-56913dcd160f',
    //       name: 'Certificate of Conformance',
    //       url: 'http://s3.amazonaws.com/ebac63ff-92ea-4ee3-a203-6448e786390a/',
    //       mimeType: 'png',
    //       hash: '32E64F38ADEFAE0B435CA1D7822E3E419EB8B674018575BE16DF01B7588CA329',
    //       dtUploaded: '2022-04-13T15:48:41.038',
    //     }]
    //   }],
    //   additionalRequested: ['Certificate of Conformance'],
    //   defects: null,
    //   errors: [{
    //     documents: 'dcc2205c-8556-4b79-b65d-e86c775dbafd',
    //     description: 'All EO’s and FCD’s by number, revision level, and date exactly as on the S/O must be noted as “Has Been Complied with”, “Has Previously Complied With”, and when/how determined, “Not Applicable” and why, or “Not Complied with” and why.',
    //     submittedBy: 'David Bettenhausen',
    //     dtCreated: '2022-04-24T22:49:18.482Z'
    //   }],
    //   dataCorrectionRequest: [],
    //   reasonOnHold: null,
    //   dtEvaluationCompleted: '2022-04-13T15:34:30.321',
    //   remarks: ['If there are attachments to the 8130, reference them by ARC form tracking number, and the Service Order number, and date.'],
    //   quote: [{
    //     status: 'SUBMITTED',
    //     dtStatusUpdated: null
    //   }],
    //   dtIssued: '2022-04-13T15:27:54.089',
    //   dtSubmitted: '2022-04-13T15:30:29.747',
    //   dtAccepted: '2022-04-13T15:34:30.321',
    //   dtOrderComplete: '2022-04-13T15:57:55.516',
    // }],
    messages: null,
    notifications: null,
    connections: ['9f29042a-0e1b-454b-b26f-0444b3108c3a'],
    dtCreated: '2022-04-08T03:44:13.917Z',
    dtModified: '2022-05-12T06:17:07.099Z',
    createdBy: '4be0e45f-1112-4ffa-bf63-74b1ebc9dc8b',
    modifiedBy: '4be0e45f-1112-4ffa-bf63-74b1ebc9dc8b',
  },
];
