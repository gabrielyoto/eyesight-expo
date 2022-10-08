import React, { createContext, useContext, useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';

import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';
import * as cocoSsd from '@tensorflow-models/coco-ssd';

const ModelContext = createContext<tf.GraphModel | null>(null);

const ModelProvider: React.FC = ({ children }) => {
  const [model, setModel] = useState<tf.GraphModel | null>(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
        console.error('initializing tf');
        // await tf.ready();
        console.error('loading model');

        // const cocoSsdModel = await cocoSsd.load({
        //   base: 'mobilenet_v2',
        // });
        // setModel(cocoSsdModel);
        console.error('ready to go');
      } catch (err) {
        console.error(err, 'error loading');
      }
    };
    loadModel();
  }, []);

  return (
    <ModelContext.Provider value={model}>{children}</ModelContext.Provider>
  );
};

const useModel = () => {
  const context = useContext(ModelContext);

  if (context) {
    return context;
  }

  console.error('useModel hook can only be used inside ModelProvider');
};

export { ModelProvider, useModel };
