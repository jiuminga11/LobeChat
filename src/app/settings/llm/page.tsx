'use client';

import Link from 'next/link';
import { memo } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import Footer from '@/app/settings/features/Footer';
import PageTitle from '@/components/PageTitle';
import { MORE_MODEL_PROVIDER_REQUEST_URL } from '@/const/url';
import { useGlobalStore } from '@/store/global';
import { useSwitchSideBarOnInit } from '@/store/global/hooks/useSwitchSettingsOnInit';
import { SettingsTabs } from '@/store/global/initialState';
import { modelProviderSelectors } from '@/store/global/selectors';

import Bedrock from './Bedrock';
import Google from './Google';
import Moonshot from './Moonshot';
import Ollama from './Ollama';
import OpenAI from './OpenAI';
import Zhipu from './Zhipu';

export default memo(() => {
  useSwitchSideBarOnInit(SettingsTabs.LLM);
  const enableOllamaFormServerConfig = useGlobalStore(
    modelProviderSelectors.enableOllamaConfigInSettings,
  );
  const { t } = useTranslation('setting');
  return (
    <>
      <PageTitle title={t('tab.llm')} />
      <OpenAI />
      {/*<AzureOpenAI />*/}
      <Zhipu />
      <Moonshot />
      <Google />
      <Bedrock />
      {enableOllamaFormServerConfig && <Ollama />}
      <Footer>
        <Trans i18nKey="llm.waitingForMore" ns={'setting'}>
          更多模型正在
          <Link aria-label={'todo'} href={MORE_MODEL_PROVIDER_REQUEST_URL} target="_blank">
            计划接入
          </Link>
          中 ，敬请期待 ✨
        </Trans>
      </Footer>
    </>
  );
});
