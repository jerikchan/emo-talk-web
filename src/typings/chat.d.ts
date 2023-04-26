declare namespace Chat {

	interface Chat {
		dateTime: string
		text: string
		type?: 'text' | 'image'
		filePreview?: string;
		inversion?: boolean
		error?: boolean
		loading?: boolean
		conversationOptions?: ConversationRequest | null
		requestOptions: { prompt: string; options?: ConversationRequest | null }
	}

	interface History {
		title: string
		isEdit: boolean
		uuid: number
	}

	interface ChatState {
		active: number | null
		usingContext: boolean;
		history: History[]
		chat: { uuid: number; data: Chat[] }[]
	}

	interface ConversationRequest {
		conversationId?: string
		parentMessageId?: string
	}

	interface ConversationResponse {
		conversationId: string
		detail: {
			choices: { finish_reason: string; index: number; logprobs: any; text: string }[]
			created: number
			id: string
			model: string
			object: string
			usage: { completion_tokens: number; prompt_tokens: number; total_tokens: number }
		}
		id: string
		parentMessageId: string
		role: string
		text: string
	}

	interface WordsInfoPos {
		x: number;
		y: number;
	}

	interface WordsInfo {
		angle: number;
		direction: number;
		height: number;
		pos: WordsInfoPos[]
		prob: number;
		width: number;
		word: string;
		x: number;
		y: number;
	}

	interface RecognizeGeneralResult {
		algo_version: string;
		content: string;
		height: number;
		orgHeight: number;
		orgWidth: number;
		prism_version: string
		prism_wnum: number
		prism_wordsInfo: WordsInfo[]
		width: number
	}

	interface Detection {
		/** EntityAnnotation mid */
		mid?: (string|null);

		/** EntityAnnotation locale */
		locale?: (string|null);

		/** EntityAnnotation description */
		description?: (string|null);

		/** EntityAnnotation score */
		score?: (number|null);

		/** EntityAnnotation confidence */
		confidence?: (number|null);

		/** EntityAnnotation topicality */
		topicality?: (number|null);

		/** EntityAnnotation boundingPoly */
		boundingPoly?: (google.cloud.vision.v1.IBoundingPoly|null);

		/** EntityAnnotation locations */
		locations?: (google.cloud.vision.v1.ILocationInfo[]|null);

		/** EntityAnnotation properties */
		properties?: (google.cloud.vision.v1.IProperty[]|null);
	}
}
