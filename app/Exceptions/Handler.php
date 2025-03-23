// In your render method
public function render($request, Throwable $e)
{
    $response = parent::render($request, $e);
    
    if ($response->status() === 404) {
        return inertia('Errors/404', ['status' => $response->status()])
            ->toResponse($request)
            ->setStatusCode($response->status());
    }
    
    return $response;
}