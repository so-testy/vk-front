// если не понадобиться - удалить

const modal = (
    <ModalRoot activeModal={activeModal}>
        <ModalPage
            id="settings"
            header={
                <ModalPageHeader
                    left={
                        IS_PLATFORM_ANDROID && (
                            <PanelHeaderButton
                                onClick={() => setActiveModal(null)}
                            >
                                <Icon24Cancel />
                            </PanelHeaderButton>
                        )
                    }
                    right={
                        IS_PLATFORM_IOS && (
                            <PanelHeaderButton
                                onClick={() => setActiveModal(null)}
                            >
                                <Icon24Dismiss />
                            </PanelHeaderButton>
                        )
                    }
                >
                    Настройки курсов
                </ModalPageHeader>
            }
            onClose={() => setActiveModal(null)}
            settlingHeight={700}
            dynamicContentHeight
        >
            <FormLayout>
                <Checkbox
                    checked={isNotificationsEnabled}
                    onChange={() =>
                        setNotifications(!isNotificationsEnabled)
                    }
                >
                    Присылать уведомления
                </Checkbox>
                {isNotificationsEnabled && (
                    <FormLayoutGroup top="Периодичность уведомлений">
                        <CellButton
                            onClick={() => {
                                setPopout(
                                    <ActionSheet
                                        onClose={() => setPopout(null)}
                                    >
                                        <ActionSheetItem
                                            autoclose
                                            onClick={() => setHours(2)}
                                        // before={<Icon28Profile />}
                                        >
                                            2 часа
                                        </ActionSheetItem>
                                        <ActionSheetItem
                                            autoclose
                                            onClick={() => setHours(3)}
                                        // before={<Icon28CameraOutline />}
                                        >
                                            3 часа
                                        </ActionSheetItem>
                                        <ActionSheetItem
                                            autoclose
                                            onClick={() => setHours(4)}
                                        // before={<Icon28CameraOutline />}
                                        >
                                            4 часа
                                        </ActionSheetItem>
                                    </ActionSheet>,
                                );
                            }}
                        >
                            Каждые {hours} часа
                        </CellButton>
                    </FormLayoutGroup>
                )}
            </FormLayout>
        </ModalPage>
    </ModalRoot>
);