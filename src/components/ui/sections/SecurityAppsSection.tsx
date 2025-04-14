export default function SecurityAppsSection() {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Essential apps that protect your Email, Events, Files, Documents
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Rorem ipsum dolor sit amet consectetur. Proin dignissim tortor mauris
          viverra sed volutpat mauris. Amet nisi amet commodo adipiscing ut
          imperdiet nunc.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">
              End-to-end encrypted inbox and messages
            </h3>
            <p className="text-sm text-gray-700">
              All your conversations are protected with full encryption and
              advanced privacy settings.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">
              Upload, share, and preview any file
            </h3>
            <p className="text-sm text-gray-700">
              Quickly send documents, spreadsheets, images or even code across
              your team securely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
