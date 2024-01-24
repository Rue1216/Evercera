import React, { useState } from 'react'
import {
  Input,
  Textarea,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from '@nextui-org/react'

export default function Form() {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [text, setText] = useState('')
  const [nameError, setNameError] = useState(null)
  const [contactError, setContactError] = useState(null)
  const [textError, setTextError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const formStyle = {
    color: 'primary',
    variant: 'bordered',
    isRequired: true
  }

  const handleClick = async () => {
    let isFormValid = true

    if (name.trim() === '') {
      setNameError('請填入您的姓名')
      isFormValid = false
    } else {
      setNameError(null)
    }

    if (contact.trim() === '') {
      setContactError('請填入您的電子郵件或聯絡電話')
      isFormValid = false
    } else {
      setContactError(null)
    }

    if (text.trim() === '') {
      setTextError('請填入訊息內容')
      isFormValid = false
    } else {
      setTextError(null)
    }

    if (!isFormValid) return

    // loading animation
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)

    onOpen()
  }

  return (
    <>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-5">
        <Input
          isRequired={formStyle.isRequired}
          isInvalid={!!nameError}
          color={formStyle.color}
          variant={formStyle.variant}
          type="text"
          label="姓名"
          value={name}
          onValueChange={setName}
          className="text-primary-300"
          errorMessage={nameError}
        />
        <Input
          isRequired={formStyle.isRequired}
          isInvalid={!!contactError}
          color={formStyle.color}
          variant={formStyle.variant}
          type="text"
          label="電子郵件或聯絡電話"
          value={contact}
          onValueChange={setContact}
          className="text-primary-300"
          errorMessage={contactError}
        />
      </div>
      <div className="w-full mb-5">
        <Textarea
          isRequired={formStyle.isRequired}
          isInvalid={!!textError}
          color={formStyle.color}
          variant={formStyle.variant}
          label="詢問內容"
          value={text}
          onValueChange={setText}
          minRows={3}
          placeholder="案件詢價、客製化評估等需求，歡迎您與我們聯繫。"
          className="w-full text-primary-300"
          errorMessage={textError}
        />
      </div>
      <Button
        onClick={handleClick}
        id="submit"
        className="w-full font-bold"
        color={formStyle.color}
        variant="flat"
        size="lg"
        isLoading={isLoading}
      >
        {!isLoading && '送出'}
      </Button>
      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-primary-200">
                已收到您的回覆
              </ModalHeader>
              <ModalBody className="text-primary-200">
                <p>
                  親愛的 {name} 您好，
                  <br />
                  我們已經收到您的訊息，會盡速回覆您，
                  <br />
                  如未收到回覆，請直接撥打電話 09-1234-5678，
                  <br />
                  將會有專人為您服務。
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="flat" onPress={onClose}>
                  關閉
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
